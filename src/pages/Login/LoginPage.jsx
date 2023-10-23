import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { auth, loginFireBase } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../redux/auth/authSlice";
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogin = useSelector((state) => state.auth.isLogin);

    if (isLogin) {
        navigate("/", { replace: true });
        toast.success("Login succesfly!");
    }

    const [loginForm, setLoginForm] = useState({
        Email: "",
        Password: "",
    });

    const changeHandle = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandle = async (e) => {
        e.preventDefault();
        const user = await loginFireBase(loginForm.Email, loginForm.Password);
        dispatch(LoginUser(user));
    };

    const GoogleSign = async () => {
        const Googleprovider = new GoogleAuthProvider();
        try {
            signInWithPopup(auth, Googleprovider).then((data) => {
                dispatch(LoginUser(data.user));
                console.log(data.user);
            });
        } catch (error) {
            toast.error(error.message);
        }
    };
    const FaceSign = async () => {
        const FaceBookprovider = new FacebookAuthProvider();
        try {
            signInWithPopup(auth, FaceBookprovider).then((data) => {
                dispatch(LoginUser(data.user));
                console.log(data);
            });
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center text-liColor">
            <div className="w-full max-w-[25rem] h-[37.7rem] py-10 px-4">
                <h3 className="text-liColor font-bold mb-4">Log in to your Udemy account</h3>

                <div className="">
                    <button
                        className="flex items-center px-2 py-1 gap-2 mt-2 hover:bg-[#e3e7ea] font-bold border border-liColor w-full"
                        onClick={GoogleSign}
                    >
                        <FcGoogle size={40} />
                        Continue with Google{" "}
                    </button>

                    <button
                        className="flex items-center px-3 py-2 gap-2 mt-2 hover:bg-[#e3e7ea] font-bold border border-liColor w-full"
                        onClick={FaceSign}
                    >
                        <FaFacebook size={30} color="#4267b2" />
                        Continue with Facebook{" "}
                    </button>

                    <button className="flex items-center px-2 py-1 gap-2 mt-2 hover:bg-[#e3e7ea] font-bold border border-liColor w-full cursor-not-allowed">
                        <AiFillApple size={40} />
                        Continue with Apple{" "}
                    </button>
                </div>

                <form className="" onSubmit={submitHandle}>
                    <input
                        type="email"
                        name="Email"
                        id="email"
                        className="p-4 text-sm gap-2 mt-2 placeholder:text-liColor hover:bg-[#e3e7ea] font-bold border border-liColor w-full outline-none"
                        placeholder="Email"
                        required
                        onChange={changeHandle}
                    />
                    <input
                        type="password"
                        name="Password"
                        id="password"
                        className="p-4 text-sm gap-2 mt-2 placeholder:text-liColor hover:bg-[#e3e7ea] font-bold border border-liColor w-full outline-none"
                        placeholder="Password"
                        required
                        onChange={changeHandle}
                    />
                    <button className="bg-[#a435f0] hover:bg-[#8710d8] text-white font-bold mt-5 w-full py-3">
                        Log in
                    </button>
                </form>

                <div className="mt-3">
                    <div className="border-b border-border pb-4  text-center">
                        or{" "}
                        <Link
                            to={"/forgot-password"}
                            className="border-b border-b-liColor text-[#5624d0] hover:text-[#401b9c] font-bold "
                        >
                            Forgot Password
                        </Link>
                    </div>

                    <div className="mt-4 text-sm">
                        <div className="text-center">
                            Don't have an account?{" "}
                            <Link
                                to={"/sign"}
                                className="border-b border-b-liColor text-[#5624d0] hover:text-[#401b9c] font-bold"
                            >
                                Sign up
                            </Link>
                        </div>
                        <div className="border-b border-b-liColor text-[#5624d0] hover:text-[#401b9c] font-bold w-fit text-center mx-auto">
                            Log in with your organization
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
