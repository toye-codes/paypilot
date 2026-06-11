import {useAuth} from "../context/AuthContext"


export const useHeader = () => {
    const { account } = useAuth();

    const headers = {
        "x-account-id": account,
    };

    return headers;
}