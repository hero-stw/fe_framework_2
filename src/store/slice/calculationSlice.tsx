import { calculation, numLength, random } from "@/commons";
import { createSlice } from "@reduxjs/toolkit";

interface ICalculationState {
  calculation: string;
  calculations: any[];
  Operations: string;
  addendOne: number;
  addendTwo: number;
  options: string;
  input: string;
}
const initialState: ICalculationState = {
  calculation: "",
  calculations: [],
  Operations: "",
  addendOne: 0,
  addendTwo: 0,
  options: "1",
  input: "",
};

const equation = ["+", "-", "×", "÷"];
export const calculationSlice = createSlice({
  name: "calculation",
  initialState,
  // trong reducer chưa các actions mà cần dùng
  // tham số state = initialState
  reducers: {
    randomCalculation: (state: ICalculationState) => {
      state.calculation = equation[random(0, 4)];
      state.addendOne = numLength(3, 9);
      state.addendTwo = numLength(2, 8);

      // Tất cả phép tính
      if (state.options == "1") {
        if (state.addendOne < state.addendTwo) {
          state.Operations = calculation(
            state.addendTwo,
            state.addendOne,
            state.calculation
          );
        } else {
          state.Operations = calculation(
            state.addendOne,
            state.addendTwo,
            state.calculation
          );
        }

        // Phép tính cộng
      } else if (state.options == "2") {
        state.Operations = calculation(state.addendOne, state.addendTwo, "+");

        // Phép tính trừ
      } else if (state.options == "3") {
        if (state.addendOne < state.addendTwo) {
          state.Operations = calculation(state.addendTwo, state.addendOne, "-");
        } else {
          state.Operations = calculation(state.addendOne, state.addendTwo, "-");
        }

        // Phép tính nhân
      } else if (state.options == "4") {
        state.Operations = calculation(state.addendOne, state.addendTwo, "×");

        // Phép tính chia
      } else if (state.options == "5") {
        if (state.addendOne < state.addendTwo) {
          state.Operations = calculation(state.addendTwo, state.addendOne, "÷");
        } else {
          state.Operations = calculation(state.addendOne, state.addendTwo, "÷");
        }
      }

      state.calculations.push(state.Operations);
    },
    saveOptions: (state: ICalculationState, actions) => {
      state.options = actions.payload;
    },
    resetCalculation: (state: ICalculationState) => {
      state.calculations = [];
    },
    setInput: (state: ICalculationState, actions) => {
      state.input = actions.payload;
    },
  },
});

export const { randomCalculation, saveOptions, resetCalculation, setInput } =
  calculationSlice.actions;

export default calculationSlice.reducer;
