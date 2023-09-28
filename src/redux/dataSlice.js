import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import navLinkAPi from "../api/NavLink.json";
import axios from "axios";

export const myData = createAsyncThunk("getData", async () => {
    try {
        const { data } = await axios.get(
            "https://udmey-388f9-default-rtdb.firebaseio.com/udemyProducts.json",
        );
        return data;
    } catch (err) {
        throw err;
    }
});

export const counterSlice = createSlice({
    name: "datas",
    initialState: {
        navLinks: navLinkAPi,
        product: [],
        isLoading: false,
    },
    reducers: {
        getProducts: (state = initialState.product, action) => {
            state.product = action.payload;
        },
        changeLoading: (state) => {
            state.isLoading = true;
            console.log(state.isLoading);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(myData.fulfilled, (state, action) => {
            state.product = action.payload;
            console.log(action.payload);
        });
    },
});

export const { getProducts, changeLoading } = counterSlice.actions;

export default counterSlice.reducer;
