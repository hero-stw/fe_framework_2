import instance from "./instance";

export const addHistory = (history: any) => {
    return instance.post('/history', history)
}

export const historyDetail = (_id: string | string[]) => {
    return instance.get(`/history/${_id}`)
}

export const getHistorys = (url: string) => {
    return instance.get(url)
}