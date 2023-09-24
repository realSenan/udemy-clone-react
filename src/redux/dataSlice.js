import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import navLinkAPi from "../api/NavLink.json";
import axios from "axios";

export const myData = createAsyncThunk("getCountry", async () => {
    try {
        const { data } = await axios.get(import.meta.env.VITE_DATA_API);
        return data;
    } catch (err) {
        console.error(err);
        throw err; // Hata yeniden fırlatılıyor
    }
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
