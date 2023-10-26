import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: "shopData",
    initialState: {
        shopData: JSON.parse(localStorage.getItem("ShopCart")) || [],
    },
    reducers: {
        addProduct: (state, action) => {
            state.shopData = [...state.shopData, action.payload];
            localStorage.setItem("ShopCart", JSON.stringify(state.shopData));
        },
        removeProduct: (state, action) => {
            state.shopData = state.shopData.filter((fProduct) => fProduct.id !== action.payload);
            localStorage.setItem("ShopCart", JSON.stringify(state.shopData));
        },
    },
});

export const { addProduct, removeProduct } = shopSlice.actions;
export default shopSlice.reducer;
