import React, { useState } from "react";
import { register } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../redux/auth/authSlice";
import toast from "react-hot-toast";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogin = useSelector((state) => state.auth.isLogin);

    isLogin && navigate("/", { replace: true });

    if (isLogin) {
        toast.success("Login succesfly");
    }

    const [FormRegister, setFormRegister] = useState({
        Name: "",
        Email: "",
        Password: "",
    });

    const handleInputChange = (e) => {
        setFormRegister({
            ...FormRegister,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandle = async (e) => {
        e.preventDefault();
        const user = await register(FormRegister.Email, FormRegister.Password, FormRegister.Name);
        dispatch(LoginUser(user));
        console.log(user);
    };

    return (
        <div className="flex items-center justify-center text-liColor">
            <div className="w-full max-w-[25rem] h-[37.7rem] py-10 px-4">
                <h3 className="text-liColor font-bold mb-4">Sign up and start learning</h3>

                <form className="" onSubmit={submitHandle}>
                    <input
                        type="text"
                        name="Name"
                        id="name"
                        className="p-4 text-sm gap-2 mt-2 placeholder:text-liColor hover:bg-[#e3e7ea] font-bold border border-liColor w-full outline-none"
                        placeholder="Full Name"
                        required
                        value={FormRegister.Name}
                        onChange={handleInputChange}
                    />

                    <input
                        type="email"
                        name="Email"
                        id="email"
                        className="p-4 text-sm gap-2 mt-2 placeholder:text-liColor hover:bg-[#e3e7ea] font-bold border border-liColor w-full outline-none"
                        placeholder="Email"
                        required
                        value={FormRegister.Email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="Password"
                        id="password"
                        className="p-4 text-sm gap-2 mt-2 placeholder:text-liColor hover:bg-[#e3e7ea] font-bold border border-liColor w-full outline-none"
                        placeholder="Password"
                        required
                        value={FormRegister.Password}
                        onChange={handleInputChange}
                    />

                    <div className="mt-5 flex items-start  gap-2">
                        <input type="checkbox" name="Privacy" id="privacy" />
                        <label
                            htmlFor="privacy"
                            className="text-sm relative -top-1 text-[#2d2f31] cursor-pointer"
                        >
                            Send me special offers, personalized <br /> recommendations, and
                            learning tips.
                        </label>
                    </div>

                    <button className="bg-[#a435f0] hover:bg-[#8710d8] text-white font-bold mt-5 w-full py-3">
                        Sign up
                    </button>
                </form>

                <div className="mt-4 text-xs text-liColor pb-4 border-b border-border text-center">
                    By signing up, you agree to our <Link className=" border-b ">Terms of Use</Link>{" "}
                    and <Link className=" border-b ">Privacy Policy</Link>.
                </div>
                <div className="text-sm mt-3 text-center">
                    Already have an account?{" "}
                    <Link to={"/login"} className=" border-b ">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
