"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthData } from "@/types";
import { useAuth } from "@/context/AuthContext";

import { useSignupMutation } from "@/hooks/auth/useSignupMutation";

export const useSignup = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [error, setError] = useState<string>("");
  const [signupData, setSignupData] = useState<AuthData>({
    businessName: "",
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const signupMutation = useSignupMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError("");
  };

  console.log(signupData);

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, businessName, name, password, phone } = signupData;

    if (!businessName || !email || !name || !password || !phone)
      return setError("fill in all input fields");

    const signupPayload: AuthData = {
      email,
      businessName,
      name,
      password,
      phone,
    };

    signupMutation.mutate(signupPayload, {
      onSuccess: (response) => {
        login(
          response.user,
          response.accounts?.[0]?.accountId || response.accountId,
        );

        router.push("/dashboard");
      },

      onError: (error: any) => {
        setError(
          error?.response?.data?.message ||
            "Failed to create new user. Please try again.",
        );
      },
    });
  };

  return {
    signupData,
    handleChange,
    handleSignup,
    error,
    isPending: signupMutation.isPending,
  };
};
