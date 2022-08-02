import { addSetting, updateSetting } from "@/api/settings";
import useSWR from "swr";

export const useSetting = () =>{
    const {data,error,mutate} = useSWR("/settings");
    
    const useAddSetting = async (data:any) =>{
        const newSetting = await addSetting(data);
        mutate([...data, newSetting]);
    }

    const useUpdateSetting = async (id:string, data:any) =>{
        const newSetting = await updateSetting(id,data);
        mutate([...data, newSetting]);
    }

    return {
        data,
        useAddSetting,
        useUpdateSetting
    }
    
}

export default useSetting;