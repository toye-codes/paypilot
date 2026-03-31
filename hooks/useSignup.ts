import { useRouter } from "next/navigation"
import { useState } from "react";
import { AuthData } from "@/types";


export const useSignup = () => {
    const router = useRouter();
    const [error, setError] = useState<string>("")
    const [signupData, setSignupData] = useState<AuthData>({
        businessName: "",
        ownerName: "",
        email: "",
        password: ""
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setSignupData((prev) => ({
            ...prev, [name]: value
        }))
    }


    console.log(signupData);
    

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!signupData.businessName || !signupData.email || !signupData.ownerName || !signupData.password) return setError("fill in all input fields");
        
        console.log(signupData);
        router.push("/dashboard")
    }


    return {signupData, handleSignup, handleChange, error};
}
