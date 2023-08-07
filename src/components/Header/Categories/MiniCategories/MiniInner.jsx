import React from "react";

function MiniInner({item,nanoid}) {
    return (
        <li key={nanoid()} className="py-2 px-4 text-mainTextClr hover:text-activeClr cursor-pointer">
            {item}
        </li>
    );
}

export default MiniInner;
