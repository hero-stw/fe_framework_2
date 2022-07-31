import { random } from "@/Commons";
import { createSlice } from "@reduxjs/toolkit";

interface IProductState {
    calculation: string;
    calculations: any[]
}
const initialState: IProductState = {
    calculation: '',
    calculations: []
};

const equation = ["+", "-", "×", "÷"];
export const calculationSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        randomCalculation: (state) => {
            state.calculation = equation[random(0, 4)]
        },
        saveCalculations: (state, actions) => {
            state.calculations.push(actions.payload)
        }
    }
})

export const { randomCalculation, saveCalculations } = calculationSlice.actions

export default calculationSlice.reducer