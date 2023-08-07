import React, { useState } from "react";
import SubsCategories from "./SubsCategories/SubsCategories";
import MiniCategories from "./MiniCategories/MiniCategories";

function CategoryDropDown({ className, linkData }) {
    const [filteredCategiry, setFilteredCategiry] = useState(linkData);
    const [SubsCategoriesData, setSubsCategoriesData] = useState();

    function checkCategory(e) {
        setFilteredCategiry(linkData.filter((item) => e.target.textContent == item.CategoryName));
    }

    //First component 3/1
    const LinkItem = linkData.map((item) => {
        return (
            <li
                key={item.CategoryID}
                className="py-2 px-4 text-mainTextClr hover:text-activeClr cursor-pointer"
                onMouseEnter={checkCategory}
            >
                <a href="#">{item.CategoryName}</a>
            </li>
        );
    });

    // Two Component 3/2
    const DropDown = filteredCategiry.map((item) => {
        return <SubsCategories key={item.CategoryID} Subcategories={item.Subcategories} subsHover={subsHover} />;
    });

    // Tree Component 3/3
    const filterMiniNavigation = filteredCategiry.map((item) => item.Subcategories[SubsCategoriesData]);
    function subsHover(e) {
        setSubsCategoriesData(e.target.textContent);
    }

    return (
        <div className={`${className} absolute top-0 left-0 pt-14  w-[22rem]`}>
            <ul className="bg-[#fff] shadow-lg min-h-[40rem] pt-2 border-r border-[#d1d7dc] cursor-default">{LinkItem}</ul>

            <div className="drop-down absolute left-[353px] top-[3.5rem]  pt-2 bg-[#ffff] w-[22rem]  min-h-[40rem] shadow-lg">
                {DropDown}
            </div>
            <ul className="drop-down absolute left-[44.125rem] top-[3.5rem]  pt-2 bg-[#ffff] w-[22rem]  min-h-[40rem] shadow-lg border-l border-[#d1d7dc]">
                <MiniCategories filterMiniNavigation={filterMiniNavigation} />
            </ul>
        </div>
    );
}

export default CategoryDropDown;
