"use client"

import { useRouter } from "next/navigation"


export const useLogin = () => {
    const router = useRouter()

    console.log("login demo user")


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push("/dashboard")
    };

    return handleSubmit;
}