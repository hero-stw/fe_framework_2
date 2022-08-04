import instance from "./instance";

export const addHistory = (history: any) => {
    return instance.post('/history', history)
}

export const getHistory = (url: string) => {
    return instance.get(url)
}