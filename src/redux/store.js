import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartRedux';
import animationsRedux from "./animationsRedux";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        animations: animationsRedux
    }
})