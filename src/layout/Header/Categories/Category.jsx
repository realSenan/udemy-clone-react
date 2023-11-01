import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import MobileCategory from "./MobileCategory/MobileCategory";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

function Category({ linkData, activeMbMenu, setActiveMbMenu }) {
    const [status, setStatus] = useState(false);

    return (
        <React.Fragment>
            <div
                className="text-liColor  hover:text-activeClr cursor-pointer hidden md:flex relative"
                onMouseEnter={() => setStatus(true)}
                onMouseLeave={() => setStatus(false)}
            >
                Categories
                <div
                    className={`${
                        status ? "block" : "hidden"
                    } absolute top-[50px] left-0  cursor-default flex  shadow-md tracking-[-.2px] PopDown `}
                >
                    <div className="absolute  h-14 w-1/3 -top-14"></div>
                    {/* First List */}
                    <ul className="w-[16rem] bg-[#fff] py-3 shadow-dropDown2 min-h-[600px] border-r border-l  border-border text-liColor text-[.9rem]">
                        {linkData.map((link) => (
                            <li key={nanoid()} className="showliwrapper  hover:text-activeClr">
                                <Link
                                    to={`/search/?${link.CategoryName}`}
                                    className="px-4 py-2 cursor-pointer flex items-center justify-between  "
                                >
                                    {link.CategoryName} <BiChevronRight size={17} />
                                </Link>
                                {/* Secondary List */}
                                <ul className="w-[16rem] bg-[#fff] py-3 shadow-dropDown2 min-h-[600px] border-r border-l  border-border showli hidden absolute top-0 left-[255px] text-liColor">
                                    {Object.keys(link.Subcategories).map((item) => (
                                        <li
                                            key={nanoid()}
                                            className="showlimiddle  hover:text-activeClr"
                                        >
                                            <Link
                                                to={`/search/?${item}`}
                                                className="px-4 py-2 cursor-pointer flex items-center justify-between  "
                                            >
                                                {item} <BiChevronRight size={17} />
                                            </Link>
                                            {/* Tree List */}
                                            <ul className="showlastli w-[16rem] bg-[#fff] py-3 shadow-dropDown2 min-h-[600px] border-r border-l  border-border  hidden absolute top-0 left-[254px] text-liColor">
                                                {link.Subcategories[item].map((items) => (
                                                    <li key={nanoid()}>
                                                        <Link
                                                            to={`/search/?${items}`}
                                                            className="px-4 py-2 hover:text-activeClr cursor-pointer flex items-center justify-between  "
                                                        >
                                                            {items}
                                                        </Link>
                                                    </li>
                                                ))}
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
        </React.Fragment>
    );
}

export default Category;
