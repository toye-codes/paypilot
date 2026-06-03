"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import OnLoad from "@/shared/components/global/OnLoad"
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/dashboard");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return <OnLoad />;
}
