import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import calculation from "./slice/calculationSlice";
import number from "./slice/numberSlice";
import user from "./slice/userSlice";

const persistConfig ={
    key:"root",
    storage,
    whitelist: ["user"]
}

const rootReducer = combineReducers({
    calculation: calculation,
    number: number,
    user: user
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)