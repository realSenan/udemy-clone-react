import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isLogin: false,
    },
    reducers: {},
});

export const {} = shopSlice.actions;
export default shopSlice.reducer;
