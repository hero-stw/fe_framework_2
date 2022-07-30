import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IProductState {
    token: string;
}
const initialState: IProductState = {
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