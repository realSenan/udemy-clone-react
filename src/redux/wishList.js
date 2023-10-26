import { createSlice } from "@reduxjs/toolkit";

export const wishList = createSlice({
    name: "wishList",
    initialState: {
        data: JSON.parse(localStorage.getItem("wishList")) || [],
    },
    reducers: {
        addWashList: (state, action) => {
            state.data = [...state.data, action.payload];
            console.log(state.data);
            localStorage.setItem("wishList", JSON.stringify(state.data));
        },
        removeWashList: (state, action) => {
            state.data = state.data.filter((removedProduct) => action.payload != removedProduct.id);
            localStorage.setItem("wishList", JSON.stringify(state.data));
        },
    },
});

export const { addWashList, removeWashList } = wishList.actions;
export default wishList.reducer;
