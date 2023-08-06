import React from "react";

const openCategoryDropDown = () => {
  
}

function Category() {
    return <div className="text-mainTextClr  hover:text-activeClr cursor-pointer hidden md:flex" onMouseEnter={openCategoryDropDown}>Categories</div>;
}

export default Category;
