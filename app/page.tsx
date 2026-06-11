"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

import OnLoad from "@/shared/components/global/OnLoad";

export default function Home() {
  const router = useRouter();
  const { isAuthenticated, isAuthLoading } = useAuth();

  useEffect(() => {
    if (isAuthLoading) return;

    const timer = setTimeout(() => {
      router.replace(isAuthenticated ? "/dashboard" : "/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router, isAuthenticated, isAuthLoading]);

  return <OnLoad />;
}
