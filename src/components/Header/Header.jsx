import React from "react";
import Category from "./Categories/Category";
import Logo from "./Logo/Logo";
import Search from "./SearchBar/Search";
import HeaderPopUp from "./HeaderPopUp/HeaderPopUp";

function Header() {
    return (
        <header className="h-[72px] bg-white flex items-center">
            <div className="container px-6">
                <nav className="flex items-center justify-between">
                    <div className="left">
                        <Logo />
                        <Category />
                    </div>
                    <Search/>
                    <HeaderPopUp/>
                </nav>
            </div>
        </header>
    );
}

export default Header;
