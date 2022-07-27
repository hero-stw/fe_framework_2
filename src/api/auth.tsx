import instance from "./instance";

export const signup = (user: any) => {
    return instance.post('/signup', user)
}

export const signin = (user: any) => {
    return instance.post('/login', user)
}

export const listUsers = (url: string) => {
    return instance.get(url)
}