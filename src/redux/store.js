import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import searchSlice from "./searchSlice";
import buttonSlice from "./buttonSlice";
import shopSlice from "./shopSlice";
import authSlice from "./auth/authSlice";
import wishList from "./wishList";

export default configureStore({
    reducer: {
        data: dataSlice,
        search: searchSlice,
        button: buttonSlice,
        shop: shopSlice,
        auth: authSlice,
        wish: wishList,
    },
});
