import React from "react";

function SubsCategories({ Subcategories, subsHover, FiChevronRight, setDropDown3, dropDown2 }) {
    const hoverFunc = (e) => {
        subsHover(e);
        setDropDown3(true);
    };

    return (
        <ul
            className={`drop-down absolute z-10 left-[286px] top-[3.5rem]  pt-2  bg-[#ffff] w-full  min-h-[40rem] shadow-custom cursor-default ${
                dropDown2 ? "block" : "hidden"
            } border-r  border-[#d1d7dc]`}
        >
            {Object.keys(Subcategories).map((item) => {
                return (
                    <li
                        key={item}
                        className="py-2 px-6  text-mainTextClr hover:text-activeClr cursor-pointer flex justify-between items-center"
                        onMouseEnter={hoverFunc}
                    >
                        {item}
                        <span className="md:hidden lg:block">
                            <FiChevronRight />
                        </span>
                    </li>
                );
            })}
        </ul>
    );
}

export default SubsCategories;
// onMouseEnter={s}
