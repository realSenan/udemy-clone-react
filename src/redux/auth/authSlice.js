import { createSlice } from "@reduxjs/toolkit";

const normalizeUser = (credential) => {
    const user = credential?.user || credential;
    const tokenResponse = user?._tokenResponse || credential?._tokenResponse;
    const providerPhoto = user?.providerData?.find((provider) => provider?.photoURL)?.photoURL;

    return {
        displayName: user?.displayName || tokenResponse?.displayName || "",
        email: user?.email || tokenResponse?.email || "",
        photoURL:
            user?.photoURL ||
            providerPhoto ||
            tokenResponse?.photoUrl ||
            tokenResponse?.photoURL ||
            "",
    };
};

const storedUser = localStorage.getItem("user");
const persistedUser = storedUser ? JSON.parse(storedUser) : null;
const initialUser = persistedUser ? normalizeUser(persistedUser) : null;

export const auth = createSlice({
    name: "auth",
    initialState: {
        isLogin: Boolean(initialUser),
        user: initialUser,
    },
    reducers: {
        LoginUser: (state, action) => {
            state.user = action.payload ? normalizeUser(action.payload) : null;
            state.isLogin = Boolean(state.user);
            if (state.user) {
                localStorage.setItem("user", JSON.stringify(state.user));
            } else {
                localStorage.removeItem("user");
            }
        },
        logOutUser: (state) => {
            localStorage.removeItem("user");
            localStorage.removeItem("wishList");
            state.isLogin = false;
            state.user = null;
        },
    },
});

export const { LoginUser, logOutUser } = auth.actions;
export default auth.reducer;
