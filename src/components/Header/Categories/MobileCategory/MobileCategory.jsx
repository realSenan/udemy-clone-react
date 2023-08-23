import { nanoid } from "nanoid";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { BsGlobe } from "react-icons/bs";

const MobileCategory = ({ linkData, BiChevronRight, activeMbMenu, setActiveMbMenu }) => {
    const [firstCategory, setFirstCategory] = useState("Web Development");
    const [secondaryCategory, setSecondaryCategory] = useState(false);

    const cliclkHandler = (e) => {
        setFirstCategory(e.currentTarget.textContent.trim());
        setSecondaryCategory(true);
    };

    return (
        <>
            {/* Background */}
            <div
                onClick={() => setActiveMbMenu(false)}
                className={`${
                    activeMbMenu ? "visible" : "invisible"
                } fixed top-0 left-0 w-full h-full bg-[#1a1919bd] transition-all duration-300`}
            ></div>

            {/* Category wrapper */}
            <div
                className={`fixed ${
                    activeMbMenu ? "left-0" : "!-left-80"
                } left-0 top-0 w-full max-w-[280px] bg-white h-full z-10 text-lg shadow-xl overflow-x-hidden transition-all duration-300 ease-in-out`}
            >
                <div className="">
                    {/* Login section */}
                    <ul className="py-2 text-activeClr border-b border-border">
                        <li className="px-4 py-2">Log in</li>
                        <li className="px-4 py-2">Sign up</li>
                    </ul>

                    <h3 className="px-4 pt-2 text-[15px] font-bold text-[#6a6f73]">Most popular</h3>

                    {/* Category First Menu */}
                    <ul className="px-4  border-b border-border">
                        {linkData.slice(0, 10).map((link) => (
                            <li onClick={cliclkHandler} key={nanoid()} className="py-2 flex items-center justify-between">
                                {Object.keys(link.Subcategories)[0]}
                                <BiChevronRight />
                            </li>
                        ))}
                        {/*//! All Category */}
                        <li className="py-2 flex items-center justify-between">
                            All Categories <BiChevronRight />{" "}
                        </li>
                    </ul>

                    <h3 className="px-4 py-2 text-[15px] font-bold text-[#6a6f73]">More from Udemy</h3>

                    {/* More from udemy */}
                    <ul className="px-4">
                        <li className="py-2">Udemy Buisness</li>
                        <li className="py-2">Get the app</li>
                        <li className="py-2">Invite friends</li>
                        <li className="py-2">Help</li>
                    </ul>
                </div>

                {/* Secondary Category */}
                <div
                    className={`${
                        secondaryCategory ? "left-0" : "left-72"
                    } absolute  top-0 w-72 bg-white h-full z-10 text-lg shadow-xl transition-all duration-300 ease-in-out`}
                >
                    <div className="p-4 flex items-center gap-4">
                        <span className="rotate-180" onClick={() => setSecondaryCategory(false)}>
                            <BiChevronRight />
                        </span>
                        Menu
                    </div>

                    <ul className="py-2 px-4">
                        {linkData.map((link) =>
                            link.Subcategories[firstCategory]?.map((item) => (
                                <li key={nanoid()} className="py-2 flex items-center justify-between">
                                    {item}
                                </li>
                            ))
                        )}
                    </ul>
                </div>

                {/* Globe Icon */}
                <div className="mx-4 w-44 py-2 flex items-center justify-center gap-3 border ">
                    <BsGlobe /> English
                </div>
            </div>

            {/* Close Button */}
            <div
                onClick={() => setActiveMbMenu(false)}
                className={`${
                    activeMbMenu ? "scale-1" : "scale-0"
                } absolute left-80 top-10 h-14 w-14 rounded-full bg-white flex items-center justify-center transition-all duration-500 ease-in-out`}
            >
                <GrClose size={17} />
            </div>
        </>
    );
};

{
}
export default MobileCategory;
