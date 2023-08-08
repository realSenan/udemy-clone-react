import { nanoid } from "nanoid";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

function MainCategoriesMB({ linkData }) {
    const mainLink = linkData.map((item) => {
        return Object.keys(item.Subcategories)
            .slice(0, 1)
            .map((items) => {
                console.log(items);
                return (
                    <li key={nanoid()} className="cursor-pointer py-2 px-4 flex items-center justify-between text-lg">
                        {items} <FiChevronRight />
                    </li>
                );
            });
        // console.log(Object.keys(item.Subcategories))
    });

    return (
        <ul>
            {mainLink}
            <li className="cursor-pointer py-2 px-4 flex items-center justify-between text-lg">
                All categories <FiChevronRight />
            </li>
        </ul>
    );
}

export default MainCategoriesMB;
