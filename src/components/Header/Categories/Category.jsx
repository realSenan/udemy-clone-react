import React, { useState } from "react";
import FIrstCategory from "./DropDownCategory/FIrstCategory";
import SecondaryCategory from "./DropDownCategory/SecondaryCategory";
import TreeCategory from "./DropDownCategory/TreeCategory";
import { BiChevronRight } from "react-icons/bi";
import MobileCategory from "./MobileCategory/MobileCategory";

function Category({ linkData, activeMbMenu, setActiveMbMenu }) {
    const [dropStatus, setDropStatus] = useState(true);
    const [dropStatus2, setDropStatus2] = useState(false);
    const [dropStatus3, setDropStatus3] = useState(false);

    const [secondaryLinks, setSecondaryLinks] = useState("");
    const [lastLinks, setLastLinks] = useState("");

    const openCategoryDropDown = () => {
        setDropStatus(true);
        setDropStatus3(false);
    };

    const CloseCategoryDropDown = () => {
        setDropStatus(false);
    };

    const SecondaryFilterHandler = (e) => {
        setSecondaryLinks(e.currentTarget.textContent.trim());
        setDropStatus2(true);
    };

    const LastFilterHandler = (e) => {
        setLastLinks(e.currentTarget.textContent.trim());
        setDropStatus3(true);
    };

    const SecondaryFilteredLinks = linkData.filter((link) => link.CategoryName == secondaryLinks);

    return (
        <>
            <div
                className="text-mainTextClr  hover:text-activeClr cursor-pointer hidden md:flex relative"
                onMouseEnter={openCategoryDropDown}
                onMouseLeave={CloseCategoryDropDown}
            >
                Categories
                <div
                    onMouseLeave={() => setDropStatus2(false)}
                    className={`${dropStatus ? "block" : "hidden"} absolute top-0 left-0 pt-14  cursor-default flex`}
                >
                    <FIrstCategory linkData={linkData} SecondaryFilterHandler={SecondaryFilterHandler} BiChevronRight={BiChevronRight} />

                    {dropStatus2 && (
                        <SecondaryCategory
                            linkData={linkData}
                            secondaryLinks={secondaryLinks}
                            BiChevronRight={BiChevronRight}
                            SecondaryFilteredLinks={SecondaryFilteredLinks}
                            LastFilterHandler={LastFilterHandler}
                        />
                    )}

                    {dropStatus3 && (
                        <TreeCategory
                            lastLinks={lastLinks}
                            linkDat={linkData}
                            BiChevronRight={BiChevronRight}
                            SecondaryFilteredLinks={SecondaryFilteredLinks}
                        />
                    )}
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
