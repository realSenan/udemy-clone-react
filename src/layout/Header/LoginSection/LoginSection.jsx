import React from "react";
import Login from "./Login/Login";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function LoginSection() {
    const isLogin = useSelector((state) => state.auth.isLogin);

    return (
        isLogin == false && (
            <div className=" items-center gap-3 hidden md:flex">
                <Link to={"login"}>
                    <Login text={"Log in"} bg={" hover:bg-gray-secondary"} />
                </Link>
                <Link to={"sign"}>
                    <Login text={"Sign up"} bg={" bg-[#1c1d1f] text-[#fff] hover:bg-opacity-80"} />
                </Link>
                <Login text={<BsGlobe size={20} />} bg={" hover:bg-gray-secondary"} />
            </div>
        )
    );
}

export default LoginSection;
