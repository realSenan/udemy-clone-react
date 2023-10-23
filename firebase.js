import { initializeApp } from "firebase/app";
import { setUser } from "./src/redux/auth/authSlice";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
    sendPasswordResetEmail,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyArNPpbkAZLptFlbPr8CbwnPC8M3voEBWg",
    authDomain: "udmey-388f9.firebaseapp.com",
    databaseURL: "https://udmey-388f9-default-rtdb.firebaseio.com",
    projectId: "udmey-388f9",
    storageBucket: "udmey-388f9.appspot.com",
    messagingSenderId: "222108021498",
    appId: "1:222108021498:web:69d3cf56a2c6a5f7118f43",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const register = async (email, password, display_name) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: display_name });
        return userCredential.user;
    } catch (error) {
        console.log(error);
    }
};

export const loginFireBase = async (email, password, display_name) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: display_name });

        return userCredential.user;
    } catch (error) {
        console.log(error);
    }
};

export const LogOut = async () => {
    await signOut(auth);
    return true;
};

export const GoogleSign = async () => {
    const Googleprovider = new GoogleAuthProvider();
    try {
        signInWithPopup(auth, Googleprovider).then((data) => {
            console.log(data.user);
        });
    } catch (error) {
        console.log(error);
    }
};
export const FaceSign = async () => {
    const FaceBookprovider = new FacebookAuthProvider();
    try {
        signInWithPopup(auth, FaceBookprovider).then((data) => {
            console.log(data);
        });
    } catch (error) {
        console.log(error);
    }
};

export const resetPassw = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email).then((data) => console.log(data));
    } catch (error) {
        throw error;
    }
};
