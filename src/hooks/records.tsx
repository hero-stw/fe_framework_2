import { getOneRecord, addRecord, listRecords, updateRecords, removeRecords } from "@/api/records";
import useSWR, {useSWRConfig} from "swr";

export const useRecords = () =>{
    const {data,error, mutate} = useSWR("/records");

    const UseAddRecord = async(data: any) => {
        const newRecord = await addRecord(data);
        console.log(newRecord);
        mutate([...data, newRecord]);
    }
    
    const UseGetOneRecord = async(id: string) => {
        const newRecord = await getOneRecord(id);
        return newRecord
    }

    const UseRemoveRecords = async(id: string) => {
        const newRecord = await removeRecords(id);
        mutate([...data, newRecord]);
    }

    const UseUpdateRecords = async(id: string, data:any) => {
        const newRecord = await updateRecords(id,data);
        mutate([...data, newRecord]);
    }

    return {
        data,
        UseAddRecord,
        UseGetOneRecord,
        UseRemoveRecords,
        UseUpdateRecords
    }
}