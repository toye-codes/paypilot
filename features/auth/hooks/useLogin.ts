"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { AuthData, LoginPayload } from "@/types";
import { useAuth } from "@/context/AuthContext";

import { useLoginMutation } from "@/hooks/auth/useLoginMutation";

export const useLogin = () => {
  const router = useRouter();
  const { login } = useAuth();

  const [loginData, setLoginData] = useState<AuthData>({
    email: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState("");

  const loginMutation = useLoginMutation();

  // Handle chand
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, phone, password } = loginData;

    const hasEmail = email?.trim();
    const hasPhone = phone?.trim();
    const hasPassword = password?.trim();

    const identifier = hasEmail || hasPhone;

    if (!hasPassword) {
      setError("Please input your password");
      return;
    }

    if (!identifier) {
      setError("Please input your email or phone number");
      return;
    }

    // Login payload
    const payload: LoginPayload = {
      identifier: hasEmail || hasPhone,
      password: password,
    };

    // Mutate login details
    loginMutation.mutate(payload, {
      onSuccess: (response) => {
        login(
          response.user,
          response.accounts?.[0]?.accountId || response.accountId,
        );
        console.log("Login successful:", response);
        router.push("/dashboard");
      },

      onError: (error: any) => {
        setError(
          error?.response?.data?.message || "Login failed. Please try again.",
        );
      },
    });
  };

  return {
    handleSubmit,
    handleChange,
    loginData,
    error,
    isPending: loginMutation.isPending,
  };
};
