import React from "react";
import Login from "./Login/Login";
import { BsGlobe } from "react-icons/bs";

function LoginSection() {
    return (
        <div className=" items-center gap-3 hidden md:flex">
            <Login text={"Log in"} bg={" hover:bg-gray-secondary"} />
            <Login text={"Sign up"} bg={" bg-[#1c1d1f] text-[#fff] hover:bg-opacity-80"} />
            <Login text={<BsGlobe size={20} />} bg={" hover:bg-gray-secondary"} />
        </div>
    );
}

export default LoginSection;
