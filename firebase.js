import { initializeApp } from "firebase/app";
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
import toast from "react-hot-toast";

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
export const auth = getAuth(app);

export const register = async (email, password, display_name) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: display_name }).then(
            toast.success("Succesfuled login"),
        );
        return userCredential;
    } catch (error) {
       toast.error(error.message);
    }
};

export const loginFireBase = async (email, password, display_name) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        await updateProfile(userCredential.user, { displayName: display_name });

        return userCredential;
    } catch (error) {
       toast.error(error.message);
    }
};



export const resetPassw = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email)
            .then((data) => console.log(data))
    } catch (error) {
       toast.error(error.message);
    }
};

export const LogOut = async () => {
    await signOut(auth).then(toast.success("Succesfuled Log Out"));
    return true;
};
