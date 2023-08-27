import { createSlice } from "@reduxjs/toolkit";
import navLinkAPi from "../api/NavLink.json";
import productData from "../api/udemyCourses.json";

export const counterSlice = createSlice({
    name: "datas",
    initialState: {
        navLinks: navLinkAPi,
        productData: productData,
    },
    reducers: {
        // incrementByAmount: (state, action) => {
        //   state.value += action.payload
        // }
    },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
