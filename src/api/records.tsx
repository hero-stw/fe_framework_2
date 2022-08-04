import instance from "./instance";

export const getOneRecord = (id: string) => {
    return instance.get(`/records/${id}`)
}

export const addRecord = (data: any) => {
    return instance.post('/records', data)
}

export const listRecords = (url: string) => {
    return instance.get(url)
}

export const getLeadeboard = (type: number) => {
    return instance.get("/records?type="+ type)
}

export const updateRecords = (id:string, data: any) => {
    return instance.put(`/records/${id}`, data)
}

export const removeRecords = (id:string) => {
    return instance.delete(`/records/${id}`)
}