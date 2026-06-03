"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthData } from "@/types";

export const useLogin = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState<AuthData>({
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  // handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(loginData);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hasEmail = loginData.email && loginData.email.trim();
    const hasPhone = loginData.phone && loginData.phone.trim();
    const hasPassword = loginData.password && loginData.password.trim();

    if (!hasPassword) return setError("Please input your password");
    if (!hasEmail && !hasPhone)
      return setError("Please input your email or phone number");

    router.push("/dashboard");

    console.log(loginData);
  };

  return { handleSubmit, handleChange, loginData, error };
};
