import { nanoid } from "nanoid";
import React from "react";

const TreeCategory = ({ lastLinks, SecondaryFilteredLinks }) => {
    return (
        <ul className="w-[16rem] bg-[#fff]  py-3 shadow-md min-h-[600px] border-r border-border max-[1010px]:hidden">
            <li className="px-4 py-2 text-[#6a6f73] font-extrabold">Popular topics</li>
            {SecondaryFilteredLinks.map((link) =>
                link.Subcategories[lastLinks]?.map((item) => (
                    <li key={nanoid()} className="px-4 py-2 hover:text-activeClr cursor-pointer flex items-center justify-between">
                        {item}
                    </li>
                ))
            )}
        </ul>
    );
};

export default TreeCategory;
