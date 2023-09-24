import React, { useState } from "react";

function PopUp({ text, className, text2, text3 }) {
    const [openWindow, setOpenWindow] = useState(false);
    return (
        <div
            onMouseEnter={() => setOpenWindow(true)}
            onMouseLeave={() => setOpenWindow(false)}
            className={`text-mainTextClr hover:text-activeClr cursor-pointer relative ${className}`}
        >
            {text}

            {openWindow && (
                <div className={`absolute right-0 pt-9 PopDown `}>
                    <div className="bg-white w-72 h-40  p-4 flex flex-col items-center justify-center shadow-md">
                        <h3 className="text-[#2D2F31] text-[18.8px] text-center font-bold leading-6 tracking-[-.2px] ">
                            {text2}
                        </h3>
                        <a
                            href="#"
                            className="bg-[#2d2f31] hover:bg-[#3E4143] transition-all duration-300 w-full py-3 px-1 mt-4 flex items-center justify-center text-white font-bold leading-3 "
                        >
                            {text3}
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopUp;
