import { createSlice } from "@reduxjs/toolkit";
import navLinkAPi from "../api/NavLink.json";

export const counterSlice = createSlice({
    name: "datas",
    initialState: {
        navLinks: navLinkAPi,
        product: [],
        isLoading: false,
        isError: null,
    },
    reducers: {
        getProducts: (state, action) => {
            state.product = action.payload.data;
        },
        changeLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
        changeError: (state, action) => {
            state.isError = action.payload;
            console.log(state.isError);
        },
    },
});

export const { increment, getProducts, changeLoading, changeError } = counterSlice.actions;

export default counterSlice.reducer;
