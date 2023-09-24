import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import navLinkAPi from "../api/NavLink.json";
import axios from "axios";

export const myData = createAsyncThunk("getCountry", async () => {
    const { data } = await axios
        .get(import.meta.env.VITE_DATA_API)
        .catch((err) => console.log(err));
    return data;
});

export const counterSlice = createSlice({
    name: "datas",
    initialState: {
        navLinks: navLinkAPi,
        product: [],
        isLoading: false,
        isError: null,
    },
    reducers: {
        getProducts: (state = initialState.product, action) => {
            state.product = action.payload;
        },
        changeLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
        changeError: (state, action) => {
            state.isError = action.payload;
            console.log(state.isError);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(myData.fulfilled, (state, action) => {
            state.product = action.payload;
            console.log(action.payload);
        });
    },
});

export const { increment, getProducts, changeLoading, changeError } = counterSlice.actions;

export default counterSlice.reducer;
