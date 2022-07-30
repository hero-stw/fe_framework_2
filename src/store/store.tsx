import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import calculation from "./slice/calculationSlice";
import number from "./slice/numberSlice";

export const makeStore = () => (
    configureStore({
        reducer: {
            calculation: calculation,
            number: number
        }
    })
)

export const wrapper = createWrapper(makeStore)