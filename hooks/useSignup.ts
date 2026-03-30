import { useRouter } from "next/navigation"


export const useSignup = () => {
    const router = useRouter();

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        router.push("/dashboard")
    }


    return handleSignup;
}
