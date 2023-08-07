import React, { useState } from "react";
import Middle from "./MiddleCategories/MiddleCategories";
import MiniCategories from "./MiniCategories/MiniCategories";
import { FiChevronRight } from "react-icons/fi";

function CategoryDropDown({ className, linkData, dropDown3, setDropDown3 }) {
    const [filteredCategiry, setFilteredCategiry] = useState(linkData);
    const [MiddleData, setMiddleData] = useState();
    const [dropDown2, setDropDown2] = useState(false);

    function checkCategory(e) {
        setFilteredCategiry(linkData.filter((item) => e.target.textContent == item.CategoryName));
        setDropDown2(true);
    }

    //First component 3/1
    const LinkItem = linkData.map((item) => {
        return (
            <li
                key={item.CategoryID}
                className="py-2 px-4 text-mainTextClr hover:text-activeClr cursor-pointer flex justify-between items-center"
                onMouseEnter={checkCategory}
            >
                <a href="#">{item.CategoryName}</a>
                <FiChevronRight />
            </li>
        );
    });

    function resulLinkMain() {
        return (
            <ul
                className={`bg-[#fff] relative z-20 shadow-custom min-h-[40rem] pt-2 border-r border-[#d1d7dc] cursor-default `}
                onMouseEnter={() => setDropDown3(false)}
            >
                {LinkItem}
            </ul>
        );
    }

    // Two Component 3/2
    const DropDown = filteredCategiry.map((item) => {
        return (
            <Middle
                key={item.CategoryID}
                Subcategories={item.Subcategories}
                subsHover={subsHover}
                FiChevronRight={FiChevronRight}
                setDropDown3={setDropDown3}
                dropDown2={dropDown2}
            />
        );
    });

    // Tree Component 3/3
    function subsHover(e) {
        setMiddleData(e.target.textContent);
    }
    const filterMiniNavigation = filteredCategiry.map((item) => item.Subcategories[MiddleData]);

    return (
        <div>
            {resulLinkMain()}

            {DropDown}

            <MiniCategories filterMiniNavigation={filterMiniNavigation} setDropDown3={setDropDown3} dropDown3={dropDown3} />
        </div>
    );
}

export default CategoryDropDown;
