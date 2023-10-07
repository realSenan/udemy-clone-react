import { useState } from "react";
import { Link } from "react-router-dom";
import { resetPassw } from "../../../firebase";

const ForgetPassw = () => {
    const [email, setEmail] = useState();

    const emailHandle = (e) => {
        setEmail(e.target.value);
    };

    const submitHandle = (e) => {
        e.preventDefault();
        resetPassw(email);
    };

    return (
        <div className="h-[37.7rem] flex justify-center flex-col px-3">
            <div className=" h-full pt-20 max-w-[23.75rem] mx-auto">
                <form action="" className="" onSubmit={submitHandle}>
                    <h3 className="text-liColor font-bold mb-2">Forgot Password</h3>
                    <input
                        onChange={emailHandle}
                        type="email"
                        placeholder="Email"
                        className="p-4 text-sm gap-2 mt-2 placeholder:text-liColor hover:bg-[#e3e7ea] font-bold border border-liColor outline-none w-full"
                    />
                    <button className="capitalize bg-[#a435f0] hover:bg-[#8710d8] text-white text-center py-3.5 font-bold w-full mt-5">
                        reset password
                    </button>
                </form>
                <div className="mt-3 text-center">
                    or{" "}
                    <Link className="text-[#5624d0] font-bold border-b pb-0.5" to={"/login"}>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassw;
