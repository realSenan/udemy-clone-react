import React, { useState } from "react";

const ShopCart = ({ GiShoppingCart, className }) => {
    const [showButton, setshowButton] = useState(false);
    return (
        <div
            onMouseEnter={() => setshowButton(true)}
            onMouseLeave={() => setshowButton(false)}
            className={`text-mainTextClr hover:text-activeClr cursor-pointer relative ${className}`}
        >
            <GiShoppingCart size={27} />

            {showButton && (
                <div className={`absolute right-0 pt-9 PopDown `}>
                    <div className="bg-white w-72 min-h-28  p-4 flex flex-col items-center justify-center shadow-md">
                        <h3 className="text-mainTextClr text-[16px] text-center  ">Your cart is empty.</h3>
                        <a
                            href="#"
                            className="flex items-center justify-center
                            text-activeClr font-extrabold mt-5 "
                        >
                            Keep Shoopping
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShopCart;
