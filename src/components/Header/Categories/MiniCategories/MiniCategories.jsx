import React from "react";
import MiniInner from "./MiniInner";
import { nanoid } from "nanoid";

function MiniCategories({ filterMiniNavigation, setDropDown3,dropDown3 }) {
    const miniContent = filterMiniNavigation.filter((item) => {
        return item !== undefined;
    });

    const miniMainContent = miniContent.map((item) => {
        return Object.values(item).map((items) => <MiniInner key={nanoid()} nanoid={nanoid} item={items} />);
    });

    return (
        <ul
            className={`drop-down absolute left-[35.8312rem] top-[3.5rem]  pt-2  bg-[#ffff] w-full  min-h-[40rem] shadow-custom cursor-default  ${
                dropDown3 ? "block" : "hidden"
            }`}
            onMouseLeave={() => setDropDown3(false)}
        >
            <li className="py-2 px-4 font-bold text-[#73777b] hover:text-[#73777b] cursor-pointer">Popular topics</li>
            {miniMainContent}
        </ul>
    );
}

export default MiniCategories;
