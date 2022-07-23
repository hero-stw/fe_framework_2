import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import lootReducer from "./reducers/index"

export const makeStore = () => (
    configureStore({
        reducer: lootReducer
    })
)

export const wrapper = createWrapper(makeStore)