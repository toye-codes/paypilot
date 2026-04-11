"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { AuthData } from "@/types"



export const useLogin = () => {
    const router = useRouter();
    const [loginData, setLoginData] = useState<AuthData>({
        email: "",
        password: ""
    })
    const [error, setError] = useState<string>("")


    
    // handle change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setLoginData((prev) => ({
            ...prev, [name]: value
        }))
    }

    console.log(loginData)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!loginData.email || !loginData.password) return setError("Please input your email and password");

        router.push("/dashboard")

        console.log(loginData);
    };

    return {handleSubmit, handleChange, loginData, error};
}