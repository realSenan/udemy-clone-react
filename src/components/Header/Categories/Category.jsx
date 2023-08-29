import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import MobileCategory from "./MobileCategory/MobileCategory";
import { nanoid } from "nanoid";

function Category({ linkData, activeMbMenu, setActiveMbMenu }) {
    return (
        <>
            <div className="text-liColor  hover:text-activeClr cursor-pointer hidden md:flex relative">
                Categories
                <div className={`absolute top-[50px] left-0  cursor-default flex  shadow-dropDownBox tracking-[-.2px] PopDown`}>
                    <div className="absolute  h-14 w-1/3 -top-14"></div>
                    {/* First List */}
                    <ul className="w-[16rem] bg-[#fff] py-3 shadow-md min-h-[600px] border-r border-l  border-border text-liColor">
                        {linkData.map((link) => (
                            <li
                                key={nanoid()}
                                className="px-4 py-2 hover:text-activeClr cursor-pointer flex items-center justify-between showliwrapper "
                            >
                                {link.CategoryName} <BiChevronRight size={17} />
                                {/* Secondary List */}
                                <ul className="w-[16rem] bg-[#fff] py-3 shadow-md min-h-[600px] border-r border-l  border-border showli hidden absolute top-0 left-[255px] text-liColor">
                                    {Object.keys(link.Subcategories).map((item) => (
                                        <li
                                            key={nanoid()}
                                            className="px-4 py-2 hover:text-activeClr cursor-pointer flex items-center justify-between showlimiddle "
                                        >
                                            {item} <BiChevronRight size={17} />
                                            {/* Tree List */}
                                            <ul className="showlastli w-[16rem] bg-[#fff] py-3 shadow-md min-h-[600px] border-r border-l  border-border  hidden absolute top-0 left-[254px] text-liColor">
                                                {}

                                                {/* {Object.values(link.Subcategories).map((item) =>
                                                    item.map((it) => (
                                                        <li
                                                            key={nanoid()}
                                                            className="px-4 py-2 hover:text-activeClr cursor-pointer flex items-center justify-between showlimiddle "
                                                        >
                                                            {it}
                                                        </li>
                                                    ))
                                                )} */}
                                            </ul>
                                            {/* Tree List */}
                                        </li>
                                    ))}
                                </ul>
                                {/* Secondary List */}
                            </li>
                        ))}
                    </ul>
                    {/* First List */}
                </div>
            </div>

            <MobileCategory
                linkData={linkData}
                BiChevronRight={BiChevronRight}
                activeMbMenu={activeMbMenu}
                setActiveMbMenu={setActiveMbMenu}
            />
        </>
    );
}

export default Category;
