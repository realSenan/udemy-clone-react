import React from "react";
import PopUp from "./PopUp/PopUp";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";

function HeaderPopUp() {
    return (
        <div className="flex gap-4  md:gap-6 items-center text-[15px] min-w-max ">
            <AiOutlineSearch size={28} className=" block md:hidden" />
            <PopUp text={"Udmey Buisness"} className=" hidden xl:block " />
            <PopUp text={"Tech on Udemy"} className="hidden lg:block" />
            <PopUp text={<GiShoppingCart size={28} />} />
        </div>
    );
}

export default HeaderPopUp;
