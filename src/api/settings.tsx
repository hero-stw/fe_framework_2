import instance from "./instance";

export const addSetting = (url:any) =>{
    return instance.get(url)
}

export const updateSetting = (id:string, data:any) =>{
    return instance.put(`/settings/${id}`,data)
}