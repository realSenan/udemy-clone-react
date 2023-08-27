import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "search",
    initialState: {
        value: "",
    },
    reducers: {
        changeValue: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { changeValue } = counterSlice.actions;

export default counterSlice.reducer;
