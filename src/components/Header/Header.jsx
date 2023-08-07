import React from "react";
import Category from "./Categories/Category";
import Logo from "./Logo/Logo";
import Search from "./SearchBar/Search";
import HeaderPopUp from "./HeaderPopUp/HeaderPopUp";
import LoginSection from "./LoginSection/LoginSection";
import { TfiAlignJustify } from "react-icons/tfi";

function Header({linkData}) {
    return (
        <header className="h-[72px] bg-white flex items-center shadow-2xl ">
            <div className="container mx-auto px-2">
                <nav className="flex items-center gap-5 justify-between md:justify-normal">
                    <TfiAlignJustify className="md:hidden" size={20} />

                    <div className="left flex items-center gap-4">
                        <Logo />
                        <Category linkData ={linkData} />
                    </div>
                    <Search />
                    <HeaderPopUp />
                    <LoginSection />
                </nav>
            </div>
        </header>
    );
}

export default Header;
