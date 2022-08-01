import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import calculation from "./slice/calculationSlice";
import total from "./slice/totalSlice";
import result from "./slice/resultSlice";
import user from "./slice/userSlice";

const persistConfig ={
    key:"root",
    storage,
    whitelist: ["user"]
}

const rootReducer = combineReducers({
    calculation: calculation,
    total: total,
    user: user,
    result: result
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)