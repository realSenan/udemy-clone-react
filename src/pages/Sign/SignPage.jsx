import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex items-center justify-center text-liColor">
            <div className="w-full max-w-[25rem] h-[38.5rem] py-10 px-4">
                <h3 className="text-liColor font-bold mb-4">Sign up and start learning</h3>

                <form className="">
                    <input
                        type="text"
                        name="Name"
                        id="name"
                        className="p-4 text-sm gap-2 mt-2 placeholder:text-liColor hover:bg-[#e3e7ea] font-bold border border-liColor w-full outline-none"
                        placeholder="Full Name"
                        required
                    />

                    <input
                        type="email"
                        name="Email"
                        id="email"
                        className="p-4 text-sm gap-2 mt-2 placeholder:text-liColor hover:bg-[#e3e7ea] font-bold border border-liColor w-full outline-none"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        name="Password"
                        id="password"
                        className="p-4 text-sm gap-2 mt-2 placeholder:text-liColor hover:bg-[#e3e7ea] font-bold border border-liColor w-full outline-none"
                        placeholder="Password"
                        required
                    />
                    <button className="bg-[#a435f0] hover:bg-[#8710d8] text-white font-bold mt-5 w-full py-3">
                        Log in
                    </button>
                </form>

                <div className="mt-5 flex items-start  gap-2">
                    <input type="checkbox" name="Privacy" id="privacy" />
                    <label htmlFor="privacy" className="text-sm relative -top-1 text-[#2d2f31]">
                        Send me special offers, personalized <br /> recommendations, and learning
                        tips.
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Login;
