import { numLength, random } from "@/Commons";
import { createSlice } from "@reduxjs/toolkit";

interface IProductState {
    calculation: string;
    calculations: any[];
    Operations: string;
    a: number;
    b: number
}
const initialState: IProductState = {
    calculation: '',
    calculations: [],
    Operations: '',
    a: 0,
    b: 0
};

const equation = ["+", "-", "×", "÷"];
export const calculationSlice = createSlice({
    name: "calculation",
    initialState,
    reducers: {
        randomCalculation: (state) => {
            state.calculation = equation[random(0, 4)],
            state.a = numLength(3, 9),
            state.b = numLength(2, 8),
            state.Operations = state.a + " " + state.calculation + " " + state.b + " = ?";
            state.calculations.push(state.Operations)
        },
        saveCalculations: (state) => {
            state.calculations.push(state.Operations)
        }
    }
})

export const { randomCalculation, saveCalculations } = calculationSlice.actions

export default calculationSlice.reducer