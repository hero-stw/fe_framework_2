import { list, signup, signin } from "@/api/auth";
import useSWR, {useSWRConfig} from "swr";

export const useAuth = () =>{
    const fetcher = async (url: string) => {
        const { data } = await list(url)
        return data
    };

    const { data, error} = useSWR("/users", fetcher)
    const { mutate } = useSWRConfig();

    // register

    const useSignup = (data: any) => {
        mutate("/users", async() => {
            const { data: user } = await signup(data);
            return [...data, user]
        })
    }
    
    const useSignin = (data: any) => {
        mutate("/users", async() => {
            const { data: user } = await signin(data);
            return [...data, user]
        })
    }

    return {
        data,
        error,
        useSignup,
        useSignin
    }
}