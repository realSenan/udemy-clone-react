import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import searchSlice from "./searchSlice";
import buttonSlice from "./buttonSlice";



export default configureStore({
    reducer: {
        data: dataSlice,
        search: searchSlice,
        button: buttonSlice,
    },
});
