import React, { useEffect, useRef, useState } from "react";
import { GrClose } from "react-icons/gr";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isCatalogAvailable } from "../../../../utils/catalogAvailability";

const MobileCategory = ({ linkData, BiChevronRight, activeMbMenu, setActiveMbMenu }) => {
    const [menuLevel, setMenuLevel] = useState("root");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);

    const linkWrap = useRef();

    const openCategory = (category) => {
        setSelectedCategory(category);
        setSelectedSubcategory(null);
        setMenuLevel("subcategories");
        setTopFunction();
    };

    const openSubcategory = (subcategory) => {
        setSelectedSubcategory(subcategory);
        setMenuLevel("topics");
        setTopFunction();
    };

    const setTopFunction = () => {
        linkWrap.current.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const isLogin = useSelector((state) => state.auth.isLogin);

    useEffect(() => {
        if (!activeMbMenu) setMenuLevel("root");
    }, [activeMbMenu]);

    return (
        <React.Fragment>
            {/* Background */}
            <div
                onClick={() => setActiveMbMenu(false)}
                className={`${
                    activeMbMenu ? "visible" : "invisible"
                } fixed top-0 left-0 w-full h-full bg-[#1a1919bd] transition-all duration-300`}
            ></div>

            {/* Close Button */}
            <div
                onClick={() => setActiveMbMenu(false)}
                className={`${
                    activeMbMenu ? "scale-1" : "scale-0"
                } absolute left-[19.6875rem] top-10 h-14 w-14 rounded-full bg-white z-10 flex items-center justify-center transition-all duration-500 ease-in-out`}
            >
                <GrClose size={17} />
            </div>

            {/* Category wrapper */}
            <div
                ref={linkWrap}
                className={`fixed ${
                    activeMbMenu ? "left-0" : "!-left-80"
                } left-0 top-0 w-full max-w-[280px] bg-white h-full z-10 shadow-xl overflow-x-hidden transition-all duration-300 ease-in-out`}
            >
                <div className="">
                    {/* Login section */}
                    {isLogin == false && (
                        <ul className="py-2 text-activeClr border-b border-border">
                            <li>
                                <Link
                                    onClick={() => setActiveMbMenu(false)}
                                    to={"login"}
                                    className="px-4 py-2 block"
                                >
                                    Log in
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"sign"}
                                    onClick={() => setActiveMbMenu(false)}
                                    className="px-4 py-2 block"
                                >
                                    Sign up
                                </Link>
                            </li>
                        </ul>
                    )}

                    <h3 className="px-4 pt-2 text-[15px] font-bold text-[#6a6f73]">Most popular</h3>

                    {/* Category First Menu */}
                    <ul className="px-4  border-b border-border">
                        {linkData.slice(0, 6).map((link) => {
                            const available = isCatalogAvailable(link.CategoryName);
                            return (
                            <li key={link.CategoryID}>
                                <button
                                    type="button"
                                    title={available ? undefined : "Courses for this category are coming soon"}
                                    onClick={() => openCategory(link)}
                                    className={`w-full py-2 flex items-center justify-between text-left ${
                                        available ? "hover:text-activeClr" : "cursor-pointer text-[#9aa1a7] opacity-55"
                                    }`}
                                >
                                    <span>{link.CategoryName}</span>
                                    {available ? <BiChevronRight /> : <span className="text-[10px] font-bold uppercase">Soon</span>}
                                </button>
                            </li>
                            );
                        })}
                        {/*//! All Category */}
                        <li>
                            <button
                                type="button"
                                className="w-full py-2 flex items-center justify-between text-left hover:text-activeClr"
                                onClick={() => {
                                    setMenuLevel("categories");
                                    setTopFunction();
                                }}
                            >
                                All Categories <BiChevronRight />
                            </button>
                        </li>
                    </ul>

                    <h3 className="px-4 py-2 text-[15px] font-bold text-[#6a6f73]">
                        More from Udemy
                    </h3>

                    {/* More from udemy */}
                    <ul className="px-4">
                        <li className="py-2">Udemy Buisness</li>
                        <li className="py-2">Get the app</li>
                        <li className="py-2">Invite friends</li>
                        <li className="py-2">Help</li>
                    </ul>
                </div>

                {/* All categories */}
                <div
                    className={`${
                        menuLevel === "categories" ? "left-0" : "left-72"
                    } absolute top-0 w-72 bg-white h-full z-30 shadow-xl transition-all duration-300 ease-in-out`}
                >
                    <div className="p-4 flex items-center gap-4">
                        <button
                            type="button"
                            aria-label="Back"
                            className="rotate-180"
                            onClick={() => setMenuLevel("root")}
                        >
                            <BiChevronRight />
                        </button>
                        All categories
                    </div>

                    <ul className="py-2 px-4">
                        {linkData.map((link) => {
                            const available = isCatalogAvailable(link.CategoryName);
                            return (
                            <li key={link.CategoryID}>
                                <button
                                    type="button"
                                    title={available ? undefined : "Courses for this category are coming soon"}
                                    onClick={() => openCategory(link)}
                                    className={`w-full py-2 flex items-center justify-between text-left ${
                                        available ? "hover:text-activeClr" : "cursor-pointer text-[#9aa1a7] opacity-55"
                                    }`}
                                >
                                    <span>{link.CategoryName}</span>
                                    {available ? <BiChevronRight /> : <span className="text-[10px] font-bold uppercase">Soon</span>}
                                </button>
                            </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Subcategories */}
                <div
                    className={`${
                        menuLevel === "subcategories" ? "left-0" : "left-72"
                    } absolute top-0 w-72 bg-white h-full z-40 shadow-xl transition-all duration-300 ease-in-out`}
                >
                    <div className="p-4 flex items-center gap-4">
                        <button
                            type="button"
                            aria-label="Back"
                            className="rotate-180"
                            onClick={() => setMenuLevel("categories")}
                        >
                            <BiChevronRight />
                        </button>
                        {selectedCategory?.CategoryName || "Categories"}
                    </div>

                    <ul className="py-2 px-6">
                        {selectedCategory &&
                            Object.keys(selectedCategory.Subcategories).map((subcategory) => {
                                const available = isCatalogAvailable(subcategory);
                                return (
                                <li key={subcategory}>
                                    <button
                                        type="button"
                                        title={available ? undefined : "Courses for this category are coming soon"}
                                        onClick={() => openSubcategory(subcategory)}
                                        className={`w-full py-2 flex items-center justify-between text-left ${
                                            available ? "hover:text-activeClr" : "cursor-pointer text-[#9aa1a7] opacity-55"
                                        }`}
                                    >
                                        <span>{subcategory}</span>
                                        {available ? <BiChevronRight /> : <span className="text-[10px] font-bold uppercase">Soon</span>}
                                    </button>
                                </li>
                                );
                            })}
                    </ul>
                </div>

                {/* Topics */}
                <div
                    className={`${
                        menuLevel === "topics" ? "left-0" : "left-72"
                    } absolute top-0 w-72 bg-white h-full z-50 shadow-xl transition-all duration-300 ease-in-out`}
                >
                    <div className="p-4 flex items-center gap-4">
                        <button
                            type="button"
                            aria-label="Back"
                            className="rotate-180"
                            onClick={() => setMenuLevel("subcategories")}
                        >
                            <BiChevronRight />
                        </button>
                        {selectedSubcategory || "Topics"}
                    </div>

                    <ul className="py-2 px-6">
                        {selectedCategory &&
                            selectedSubcategory &&
                            selectedCategory.Subcategories[selectedSubcategory].map((topic) => {
                                const available = isCatalogAvailable(topic);
                                return (
                                <li key={topic}>
                                    <button
                                        type="button"
                                        disabled={!available}
                                        aria-disabled={!available}
                                        title={available ? undefined : "Courses for this topic are coming soon"}
                                        className={`w-full py-2 text-left ${
                                            available ? "hover:text-activeClr" : "cursor-not-allowed text-[#9aa1a7] opacity-55"
                                        }`}
                                    >
                                        <span>{topic}</span>
                                        {!available && <span className="float-right text-[10px] font-bold uppercase">Soon</span>}
                                    </button>
                                </li>
                                );
                            })}
                    </ul>
                </div>

                {/* Globe Icon */}
                <div className="mx-4 w-[calc(100%-2rem)] py-2 flex items-center justify-center gap-3 border">
                    <BsGlobe /> English
                </div>
            </div>
        </React.Fragment>
    );
};

export default MobileCategory;
