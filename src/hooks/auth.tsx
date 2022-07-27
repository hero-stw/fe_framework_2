import { listUsers, signup, signin } from "@/api/auth";
import useSWR, {useSWRConfig} from "swr";

export const useAuth = () =>{
    const {data,error, mutate} = useSWR("/users");

    // register

    const UseSignup = async(user: any) => {
        const newUser = await signup(user);
        console.log(newUser);
        mutate([...data, newUser]);
    }
    
    const UseSignin = async(user: any) => {
        const newUser = await signin(user);
        return newUser
    }

    return {
        data,
        error,
        UseSignup,
        UseSignin
    }
}