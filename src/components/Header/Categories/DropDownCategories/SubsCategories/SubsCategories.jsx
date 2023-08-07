import React from "react";

function SubsCategories({ Subcategories, subsHover }) {
    return (
        <ul className="">
            {Object.keys(Subcategories).map((item) => {
                return (
                    <li
                        key={item}
                        className="py-2 px-4 text-mainTextClr hover:text-activeClr cursor-pointer"
                        onMouseEnter={subsHover}
                    >
                        {item}
                    </li>
                );
            })}
        </ul>
    );
}

export default SubsCategories;
// onMouseEnter={s}
