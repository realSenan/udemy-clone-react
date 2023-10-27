import { createSlice } from "@reduxjs/toolkit";
export const auth = createSlice({
    name: "auth",
    initialState: {
        isLogin: localStorage.getItem("user") ? true : false,
    },
    reducers: {
        LoginUser: (state, action) => {
            console.log("payload", action.payload);
            state.isLogin = action.payload != undefined && true;

            state.isLogin && localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logOutUser: (state) => {
            localStorage.removeItem("user");
            localStorage.removeItem("wishList");
            state.isLogin = false;
        },
    },
});

export const { LoginUser, logOutUser } = auth.actions;
export default auth.reducer;
