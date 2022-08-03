import { numLength, random } from "@/commons";
import { createSlice } from "@reduxjs/toolkit";

interface ICalculationState {
    calculation: string;
    calculations: any[];
    Operations: string;
    a: number;
    b: number,
    addition:string,
    input: string
}
const initialState: ICalculationState = {
    calculation: '',
    calculations: [],
    Operations: '',
    a: 0,
    b: 0,
    addition:'1',
    input: ''
};



const calculation = (a: number, b: number, ch: string) => {
    return a + " " + ch + " " + b + " = ?";
}
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
                    state.Operations = calculation(state.b, state.a, state.calculation )
                } else {
                    state.Operations = calculation(state.a, state.b, state.calculation )
                }
            
            // Phép tính cộng
            }else if(state.addition == '2'){
                state.Operations = calculation(state.a, state.b, "+" )
            
            // Phép tính trừ
            }else if(state.addition == '3'){
                if(state.a < state.b){
                    state.Operations = calculation(state.b, state.a, "-" )
                } else {
                    state.Operations = calculation(state.a, state.b, "-" )
                }
                
            // Phép tính nhân    
            }else if(state.addition == '4'){
                state.Operations = calculation(state.a, state.b, "×" )

            // Phép tính chia  
            }else if(state.addition == '5'){
                if(state.a < state.b){
                    state.Operations = calculation(state.b, state.a, "÷" )
                } else {
                    state.Operations = calculation(state.a, state.b, "÷" )
                }
            }
           
            state.calculations.push(state.Operations)
        },
        saveAddition: (state,actions) => {
            state.addition = actions.payload
        },
        resetCalculation: (state) => {
            state.calculations = []
        },
        setInput: (state, actions) => {
            state.input = actions.payload
        }
    }
})

export const { randomCalculation, saveAddition, resetCalculation, setInput } = calculationSlice.actions

export default calculationSlice.reducer