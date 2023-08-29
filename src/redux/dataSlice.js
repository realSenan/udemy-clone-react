import { createSlice } from "@reduxjs/toolkit";
import navLinkAPi from "../api/NavLink.json";

export const counterSlice = createSlice({
    name: "datas",
    initialState: {
        navLinks: navLinkAPi,
    },
    reducers: {},
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
