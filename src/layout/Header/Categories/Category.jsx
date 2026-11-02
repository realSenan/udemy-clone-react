import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import MobileCategory from "./MobileCategory/MobileCategory";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeValue } from "../../../redux/searchSlice";
import { getCatalogSearchTerm, isCatalogAvailable } from "../../../utils/catalogAvailability";

function Category({ linkData, activeMbMenu, setActiveMbMenu }) {
    const [status, setStatus] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchCatalog = (label) => {
        dispatch(changeValue(""));
        setStatus(false);
        navigate(`/search?${encodeURIComponent(getCatalogSearchTerm(label))}`);
    };

    const showCategory = (category) => {
        if (!category) return;
        setSelectedCategory(category);
        setSelectedSubcategory(null);
    };

    const openMenu = () => {
        setStatus(true);
        setSelectedCategory(null);
        setSelectedSubcategory(null);
    };

    return (
        <React.Fragment>
            <div
                className="hidden md:block relative"
                onMouseEnter={openMenu}
                onMouseLeave={() => setStatus(false)}
            >
                <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={status}
                    onClick={openMenu}
                    className="text-liColor hover:text-activeClr cursor-pointer py-6"
                >
                    Categories
                </button>
                <div
                    className={`${
                        status ? "flex" : "hidden"
                    } absolute top-full left-[-18px] cursor-default shadow-dropDownBox tracking-[-.2px] PopDown`}
                    role="menu"
                >
                    {/* First List */}
                    <ul className="w-[16rem] bg-[#fff] py-3 min-h-[600px] border-r border-border text-liColor text-[.9rem]">
                        {linkData.map((link) => {
                            const available = isCatalogAvailable(link.CategoryName);
                            return (
                            <li key={link.CategoryID}>
                                <button
                                    type="button"
                                    title={available ? undefined : "Courses for this category are coming soon"}
                                    onMouseEnter={() => showCategory(link)}
                                    onFocus={() => showCategory(link)}
                                    onClick={() => {
                                        if (available) searchCatalog(link.CategoryName);
                                    }}
                                    className={`w-full px-4 py-2 text-left flex items-center justify-between transition-colors ${
                                        available
                                            ? selectedCategory?.CategoryID === link.CategoryID
                                                ? "bg-gray-secondary text-activeClr"
                                                : "hover:text-activeClr"
                                            : "cursor-pointer text-[#9aa1a7] opacity-55"
                                    }`}
                                >
                                    <span>{link.CategoryName}</span>
                                    {available ? <BiChevronRight size={17} /> : <span className="text-[10px] font-bold uppercase tracking-wide">Soon</span>}
                                </button>
                            </li>
                            );
                        })}
                    </ul>
                    {/* First List */}
                    {selectedCategory && (
                        <ul className="w-[16rem] bg-white py-3 min-h-[600px] border-r border-border text-liColor">
                            {Object.keys(selectedCategory.Subcategories).map((subcategory) => {
                                const available = isCatalogAvailable(subcategory);
                                return (
                                <li key={subcategory}>
                                    <button
                                        type="button"
                                        title={available ? undefined : "Courses for this category are coming soon"}
                                        onMouseEnter={() => setSelectedSubcategory(subcategory)}
                                        onFocus={() => setSelectedSubcategory(subcategory)}
                                        onClick={() => {
                                            if (available) searchCatalog(subcategory);
                                        }}
                                        className={`w-full px-4 py-2 text-left flex items-center justify-between transition-colors ${
                                            available
                                                ? selectedSubcategory === subcategory
                                                    ? "bg-gray-secondary text-activeClr"
                                                    : "hover:text-activeClr"
                                                : "cursor-pointer text-[#9aa1a7] opacity-55"
                                        }`}
                                    >
                                        <span>{subcategory}</span>
                                        {available ? <BiChevronRight size={17} /> : <span className="text-[10px] font-bold uppercase tracking-wide">Soon</span>}
                                    </button>
                                </li>
                                );
                            })}
                        </ul>
                    )}
                    {selectedCategory && selectedSubcategory && (
                        <ul className="w-[16rem] bg-white py-3 min-h-[600px] text-liColor">
                            <li className="px-4 py-2 text-xs font-bold uppercase tracking-wide text-disableColor">
                                Popular topics
                            </li>
                            {selectedCategory.Subcategories[selectedSubcategory].map((topic) => {
                                const available = isCatalogAvailable(topic);
                                return (
                                <li key={topic}>
                                    <button
                                        type="button"
                                        title={available ? undefined : "Courses for this topic are coming soon"}
                                        onClick={() => {
                                            if (available) searchCatalog(topic);
                                        }}
                                        className={`w-full px-4 py-2 text-left transition-colors ${
                                            available
                                                ? "cursor-pointer hover:text-activeClr"
                                                : "cursor-pointer text-[#9aa1a7] opacity-55 hover:text-activeClr hover:opacity-100"
                                        }`}
                                    >
                                        <span>{topic}</span>
                                        {!available && <span className="float-right text-[10px] font-bold uppercase tracking-wide">Soon</span>}
                                    </button>
                                </li>
                                );
                            })}
                        </ul>
                    )}
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
