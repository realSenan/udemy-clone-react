import { nanoid } from "nanoid";
import React from "react";

const FIrstCategory = ({ SecondaryFilterHandler, linkData, BiChevronRight }) => {
    return (
        <ul className="w-[18rem] bg-[#fff] text-[#000] py-3 shadow-md min-h-[600px] border-r  border-border PopDown">
            {linkData.map((link) => (
                <li
                    key={nanoid()}
                    onMouseEnter={SecondaryFilterHandler}
                    className="px-5 py-2 hover:text-activeClr cursor-pointer flex items-center justify-between"
                >
                    {link.CategoryName} <BiChevronRight size={17} />
                </li>
            ))}
        </ul>
    );
};

export default FIrstCategory;
