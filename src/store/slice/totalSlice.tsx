import { numLength, random } from "@/Commons";
import { createSlice } from "@reduxjs/toolkit";

interface TypeTotal {
    typeTotal: {
        calculator: string,
        inputValue: number,
        correctResult: number,
        marginOfError: number,
        duration: number
    }
}

interface ITotalState {
    total: TypeTotal[]
}
const initialState: ITotalState = {
    total: []
};

export const numberSlice = createSlice({
    name: "total",
    initialState,
    reducers: {
        saveTotal: (state, actions) => {
            state.total.push(actions.payload)
        }
    }
})

export const { saveTotal } = numberSlice.actions

export default numberSlice.reducer