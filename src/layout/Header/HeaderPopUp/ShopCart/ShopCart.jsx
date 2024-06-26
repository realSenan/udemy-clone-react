import React, { useState } from "react";
import ShopCartItem from "../../../../components/ShopCartItem";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const ShopCart = ({ GiShoppingCart, className }) => {
    const [showButton, setshowButton] = useState(false);

    const shopItems = useSelector((state) => state.shop.shopData);

    return (
        <div
            onMouseEnter={() => setshowButton(true)}
            onMouseLeave={() => setshowButton(false)}
            className={`text-mainTextClr hover:text-activeClr cursor-pointer relative ${className} ps-1`}
        >
            <Link to={"/cart-shop"}>
                <GiShoppingCart size={27} />

                {shopItems.length != 0 && (
                    <div className="w-6 h-5 rounded-full bg-activeClr absolute -top-2 -right-2 flex items-center justify-center text-white text-sm">
                        {shopItems.length}
                    </div>
                )}
            </Link>

            {showButton && (
                <div className={`absolute right-0 pt-7 PopDown cursor-default`}>
                    <div
                        className={`bg-white w-[18.75rem] min-h-[6rem] ${
                            shopItems.length ? "px-0 pe-1 pt-4 pb-0" : " p-4"
                        }  flex flex-col justify-center shadow-md`}
                    >
                        {shopItems.length == 0 && (
                            <>
                                <h3 className="text-mainTextClr text-[1rem] text-center  ">
                                    Your cart is empty.
                                </h3>
                                <Link
                                    className="flex items-center justify-center
                            text-activeClr font-bold mt-3 "
                                >
                                    Keep Shoopping
                                </Link>
                            </>
                        )}

                        {shopItems.length != 0 && (
                            <ul className="flex flex-col gap-5 max-h-[30.625rem] overflow-y-auto ">
                                {shopItems.map((product) => (
                                    <li
                                        key={nanoid()}
                                        className="ps-4  pb-4 border-b border-border"
                                    >
                                        {<ShopCartItem key={nanoid()} product={product} />}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {shopItems.length != 0 && (
                            <div
                                className={` py-3  px-4 ${
                                    window.location.pathname == "/cart-shop" && "!hidden"
                                }`}
                            >
                                <div className="font-semibold text-liColor text-xl">
                                    Total: $
                                    {shopItems
                                        .reduce((acc, current) => acc + +current.price, 0)
                                        .toFixed(2)}
                                </div>
                                <Link
                                    onClick={(e) => setshowButton(false)}
                                    to={`cart-shop`}
                                    className=" flex justify-center items-center py-3.5 w-full bg-liColor hover:opacity-95 text-white mt-2"
                                >
                                    Go to cart
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShopCart;
