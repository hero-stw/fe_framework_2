import { random } from "@/Commons";
import { createSlice } from "@reduxjs/toolkit";

interface IProductState {
    calculation: string;
}
const initialState: IProductState = {
    calculation: ''
};

const equation = ["+", "-", "×", "÷"];
export const calculationSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        randomCalculation: (state) => {
            state.calculation = equation[random(0, 4)]
        }
    }
})

export const {randomCalculation} = calculationSlice.actions

export default calculationSlice.reducer