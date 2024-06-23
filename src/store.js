// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit"

import authReducer from "./Reducers";

const store = configureStore({
    reducer: {
        authReducer
    },
    devTools: true
})


export default store;