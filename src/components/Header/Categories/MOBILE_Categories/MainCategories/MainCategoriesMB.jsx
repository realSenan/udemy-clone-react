import { nanoid } from "nanoid";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

function MainCategoriesMB({ linkData, setMbPopUp, setOpenPop, openPop }) {
    const mainLink = linkData.map((item) => {
        return Object.keys(item.Subcategories)
            .slice(0, 1)
            .map((items) => {
                return (
                    <li
                        onClick={(e) => {
                            filterCategory(e), settop();
                        }}
                        key={nanoid()}
                        className="cursor-pointer py-2 px-4 flex items-center justify-between text-lg"
                    >
                        {items} <FiChevronRight />
                    </li>
                );
            });
    });

    function filterCategory(e) {
        setMbPopUp(e.target.textContent);
        setOpenPop(true);
    }

    const menu = document.querySelector(".csxmenu");
    function settop() {
        menu.scrollTo({
            top: 0,
        });
    }

    return (
        <ul className="text-[#2d2f31]">
            {mainLink}
            <li
                className="cursor-pointer py-2 px-4 flex items-center justify-between text-lg"
                onClick={(e) => {
                    filterCategory(e), settop();
                }}
            >
                All categories <FiChevronRight />
            </li>
        </ul>
    );
}

export default MainCategoriesMB;
