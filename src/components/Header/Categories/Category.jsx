import React, { useState } from "react";
import CategoryDropDown from "./DropDownCategories/CategoryDropDown";

function Category({linkData}) {
    const [dropStatus, setDropStatus] = useState(true);

    const openCategoryDropDown = () => {
        setDropStatus(true);
    };

    const CloseCategoryDropDown = () => {
        // setDropStatus(false);
    };
    return (
        <div
            className="text-mainTextClr  hover:text-activeClr cursor-pointer hidden md:flex relative"
            onMouseEnter={openCategoryDropDown}
            onMouseLeave={CloseCategoryDropDown}
        >
            Categories
            <CategoryDropDown className={`${dropStatus ? "block" : "hidden"}`}  linkData = {linkData}/>
        </div>
    );
}

export default Category;
