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
                        onClick={filterCategory}
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
        window.scrollTo({
            top: 0,
        });
    }

    return (
        <ul className="text-[#2d2f31]">
            {mainLink}
            <li className="cursor-pointer py-2 px-4 flex items-center justify-between text-lg">
                All categories <FiChevronRight />
            </li>
        </ul>
    );
}

export default MainCategoriesMB;
