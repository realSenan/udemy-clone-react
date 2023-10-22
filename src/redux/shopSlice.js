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
        removeProduct: (state, action) => {
            console.log(action.payload)
            state.shopData = state.shopData.filter(fProduct => fProduct.id !== action.payload);
        }
        
    },
});

export const { addProduct,removeProduct } = shopSlice.actions;
export default shopSlice.reducer;
