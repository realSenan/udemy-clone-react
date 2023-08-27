import { nanoid } from "nanoid";
import React from "react";

const SecondaryCategory = ({LastFilterHandler,BiChevronRight,SecondaryFilteredLinks}) => {

    
    return (
        <ul className="w-[16rem] bg-[#fff]  py-3 shadow-md min-h-[600px] border-r border-border ">
            {SecondaryFilteredLinks.map((filterLink) =>
                Object.keys(filterLink.Subcategories).map((item) => (
                    <li
                        key={nanoid()}
                        onMouseEnter={LastFilterHandler}
                        className="px-4 py-2 hover:text-activeClr cursor-pointer flex items-center justify-between"
                    >
                        {item}
                        <span className="max-[1010px]:hidden">
                            <BiChevronRight size={17} />
                        </span>
                    </li>
                ))
            )}
        </ul>
    );
};

export default SecondaryCategory;
