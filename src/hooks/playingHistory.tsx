import { addHistory } from "@/api/playingHistory";
import useSWR, {useSWRConfig} from "swr";

export const useHistory = () =>{
    const {data, error, mutate} = useSWR("/historys");

    // register

    const History = async(history: any) => {
        const newHistory = await addHistory(history);
        mutate([...data, newHistory]);
    }
    
    return {
        data,
        error,
        History
    }
}