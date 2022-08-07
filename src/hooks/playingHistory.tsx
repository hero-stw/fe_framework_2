import { addHistory, historyDetail } from "@/api/playingHistory";
import useSWR, {useSWRConfig} from "swr";

export const useHistory = () =>{
    const {data, error, mutate} = useSWR("/historys");

    // register

    const History = async(history: any) => {
        const newHistory = await addHistory(history);
        mutate([...data, newHistory]);
    }

    const getHistory = async(_id: string | string[]) => {
        const newHistory = await historyDetail(_id);
        return newHistory
    }
    
    return {
        data,
        error,
        History,
        getHistory
    }
}