import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: "shopData",
    initialState: {
        shopData: [],
    },
    reducers: {
        addProduct: (state, action) => {
            state.shopData = [...state.shopData, action.payload];
        },
    },
});

export const { addProduct } = shopSlice.actions;
export default shopSlice.reducer;
