import React, { useState } from "react";
import PopUp from "./PopUp/PopUp";
import { AiOutlineSearch } from "react-icons/ai";
import ShopCart from "./ShopCart/ShopCart";

function HeaderPopUp({ GiShoppingCart }) {
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
            <PopUp
                text={"Tech on Udemy"}
                className="hidden lg:block"
                text2={"Turn what you know into an opportunity and reach millions around the world."}
                text3={"Learn More"}
                GiShoppingCart={GiShoppingCart}
            />
            <ShopCart GiShoppingCart={GiShoppingCart} />
        </div>
    );
}

export default HeaderPopUp;
