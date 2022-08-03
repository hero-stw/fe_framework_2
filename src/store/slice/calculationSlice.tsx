import { numLength, random } from "@/commons";
import { createSlice } from "@reduxjs/toolkit";

interface ICalculationState {
    calculation: string;
    calculations: any[];
    Operations: string;
    a: number;
    b: number,
    addition:string
}
const initialState: ICalculationState = {
    calculation: '',
    calculations: [],
    Operations: '',
    a: 0,
    b: 0,
    addition:''
};

const equation = ["+", "-", "×", "÷"];
export const calculationSlice = createSlice({
    name: "calculation",
    initialState,
    // trong reducer chưa các actions mà cần dùng
    // tham số state = initialState
    reducers: {
        randomCalculation: (state) => {
            state.calculation = equation[random(0, 4)];
            state.a = numLength(3, 9);
            state.b = numLength(2, 8);

            // Tất cả phép tính
            if(state.addition == '1'){
                if(state.a < state.b){
                    state.Operations = state.b + " " + state.calculation + " " + state.a + " = ?";
                } else {
                    state.Operations = state.a + " " + state.calculation + " " + state.b + " = ?";
                }
            
            // Phép tính cộng
            }else if(state.addition == '2'){
                state.Operations = state.b + " + " + state.a + " = ?";
            
            // Phép tính trừ
            }else if(state.addition == '3'){
                if(state.a < state.b){
                    state.Operations = state.b + " - " + state.a + " = ?";
                } else {
                    state.Operations = state.a + " - " + state.b + " = ?";
                }
                
            // Phép tính nhân    
            }else if(state.addition == '4'){
                state.Operations = state.b + " × " + state.a + " = ?";

            // Phép tính chia  
            }else if(state.addition == '5'){
                if(state.a < state.b){
                    state.Operations = state.b + " ÷ " + state.a + " = ?";
                } else {
                    state.Operations = state.a + " ÷ " + state.b + " = ?";
                }
            }
           
            state.calculations.push(state.Operations)
        },
        saveAddition: (state,actions) => {
            state.addition = actions.payload
        },
    }
})

export const { randomCalculation, saveAddition } = calculationSlice.actions

export default calculationSlice.reducer