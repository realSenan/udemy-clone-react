import React, { useState } from "react";
import PopUp from "./PopUp/PopUp";
import { AiOutlineSearch } from "react-icons/ai";
import ShopCart from "./ShopCart/ShopCart";
import { useSelector } from "react-redux";
import Faworite from "./Faworite/Faworite";
import RingTone from "./RingTone/RingTone";
import Profile from "./Profile/Profile";

function HeaderPopUp({ GiShoppingCart }) {
    const isLogin = useSelector((state) => state.auth.isLogin);

    return (
        <div className="flex gap-4  md:gap-6 items-center text-[15px] min-w-max ">
            <AiOutlineSearch size={28} className=" block md:hidden" />
            <PopUp
                text={"Udmey Buisness"}
                className=" hidden xl:block "
                text2={"Get your team access to over 22,000 top Udemy courses, anytime, anywhere."}
                text3={"Try Udemy Buisness"}
                GiShoppingCart={GiShoppingCart}
            />
            {isLogin ? (
                <>
                    <div className="text-sm tracking-tight hover:text-activeClr cursor-pointer hidden lg:block">
                        Instructor
                    </div>
                    <div className="text-sm tracking-tight hover:text-activeClr cursor-pointer hidden md:block">
                        My Learning
                    </div>

                    <div className="hidden os:block">
                        <Faworite />
                    </div>
                </>
            ) : (
                <PopUp
                    text={"Tech on Udemy"}
                    className="hidden lg:block"
                    text2={
                        "Turn what you know into an opportunity and reach millions around the world."
                    }
                    text3={"Learn More"}
                    GiShoppingCart={GiShoppingCart}
                />
            )}

            <ShopCart GiShoppingCart={GiShoppingCart} />

            {isLogin && (
                <>
                    <div className="hidden os:block">
                        <RingTone />
                    </div>
                    <div className="md:block hidden"><Profile /></div>
                </>
            )}
        </div>
    );
}

export default HeaderPopUp;
