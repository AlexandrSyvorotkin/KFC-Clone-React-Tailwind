import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from "./features/goodsSlice";

export const store = configureStore({
    reducer: {
        goods: goodsReducer,
    }
})