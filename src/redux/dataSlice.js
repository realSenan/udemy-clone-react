import { createSlice } from "@reduxjs/toolkit";
import navLinkAPi from "../api/NavLink.json";
import productApp from "../api/udemyCourses.json";

export const counterSlice = createSlice({
  name: "datas",
  initialState: {
    navLinks: navLinkAPi,
    product: productApp.udemyProducts,
    isLoading: false,
  },
  reducers: {
    getProducts: (state, action) => {
      state.product = action.payload;
    },
    changeLoading: (state) => {
      state.isLoading = true;
      console.log(state.isLoading);
    },
  },
});

export const { getProducts, changeLoading } = counterSlice.actions;

export default counterSlice.reducer;
