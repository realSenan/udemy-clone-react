import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "filter",
    initialState: {
        filter: "5",
    },
    reducers: {
        findFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { findFilter } = counterSlice.actions;

export default counterSlice.reducer;
