import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IUserState {
    token: string;
}
const initialState: IUserState = {
    token: null
};
export const calculationSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, actions) => {
            state.token = actions.payload.token
        }
    }
})

export const { loginSuccess } = calculationSlice.actions


export default calculationSlice.reducer