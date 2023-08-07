import React from "react";

function MiniCategories({ filterMiniNavigation }) {
    
    const miniContent = filterMiniNavigation.filter((item) => {
        return item !== undefined;
    });

    const miniMainContent = miniContent.map((item, index) => {
        return (
            <li key={index} className="py-2 px-4 text-mainTextClr hover:text-activeClr cursor-pointer">
                {item}
            </li>
        );
    });

    console.log(miniMainContent);

    return (
        <ul>
            {miniMainContent}
        </ul>
    );
}

export default MiniCategories;
