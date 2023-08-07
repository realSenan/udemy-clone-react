import React, { useState } from "react";
import CategoryDropDown from "./MainCategories/MainCategory";

function Category({ linkData }) {
    const [dropStatus, setDropStatus] = useState(false);
    const [dropDown3, setDropDown3] = useState(false);

    const openCategoryDropDown = () => {
        setDropStatus(true);
    };

    const CloseCategoryDropDown = () => {
        setDropStatus(false);
    };
    return (
        <div
            className="text-mainTextClr  hover:text-activeClr cursor-pointer hidden md:flex relative"
            onMouseEnter={openCategoryDropDown}
            onMouseLeave={CloseCategoryDropDown}
        >
            Categories
            <div className={`${dropStatus ? "block" : "hidden"} absolute top-0 left-0 pt-14  w-[18rem]`}>
                <CategoryDropDown
                    className={`${dropStatus ? "block" : "hidden"}`}
                    linkData={linkData}
                    setDropDown3={setDropDown3}
                    dropDown3={dropDown3}
                />
            </div>
        </div>
    );
}

export default Category;
