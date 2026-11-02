import React from "react";
import Star from "../pages/Home/Main/ProductFilterSection/Star";

import { BiSolidCircle } from "react-icons/bi";
import { IoTicket } from "react-icons/io5";
import { RandomLevel, RandomNumber } from "../hooks/useRandom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../redux/shopSlice";
import toast from "react-hot-toast";
import { addWashList, removeWashList } from "../redux/wishList";
import { useEffect } from "react";
import { useState } from "react";

const PageShopItem = ({ product }) => {
    const dispatch = useDispatch();
    const [isWashListAdded, setIsWashListAdded] = useState(false);
    const isLogin = useSelector((state) => state.auth.isLogin);

    const washData = useSelector((state) => state.wish.data);

    const removeHandle = (e) => {
        dispatch(removeProduct(product.id));
        dispatch(removeWashList(product.id));
        toast.success(
            `Succesfly Remove  ${
                product.category[0].toUpperCase() + product.category.slice(1)
            } Course`,
        );
    };

    useEffect(() => {
        washData.find((wProduct) => product.id == wProduct.id && setIsWashListAdded(true));
    }, []);

    const wishList = (e) => {
        if (!isLogin) {
            navigate("/login");
        } else {
            if (isWashListAdded) {
                washData.find((wProduct) => product.id == wProduct.id && setIsWashListAdded(true));
            } else {
                setIsWashListAdded(true);
                toast.success("WishList Added!");
                dispatch(addWashList(product));
                dispatch(removeProduct(product.id));
            }
        }
    };

    const addCart = (e) => {
        dispatch(addProduct(product));
        dispatch(removeWashList(product.id))
    };

    return (
        <div className="flex flex-col gap-3 border-t border-border py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-5 ">
            <div className="flex w-full min-w-0 items-start gap-3 sm:gap-5">
                <Link to={`/course?id=${product.id}`} className="block h-16 w-24 shrink-0 sm:w-32">
                    <img src={product.img} alt={product["headTexts:"]} className="block h-full w-full object-cover" />
                </Link>
                <div className="min-w-0 flex-1 lg:flex lg:items-start lg:justify-between">
                    <div className="min-w-0">
                        <Link to={`/course?id=${product.id}`}>
                            <h2 className="text-liColor font-bold line-clamp-2">
                                {product["headTexts:"]}
                            </h2>
                            <h3 className="text-[.8125rem]">{product["user:"]}</h3>
                            <div className="mt-1">
                                <div className="lg:flex items-center ">
                                    {product.bestseller && (
                                        <div className="text-[#3c3b0a] bg-[#e6e592] w-min text-[12px] px-2 py-0.5 me-2 font-bold">
                                            Bestseller
                                        </div>
                                    )}
                                    <Star product={product} />
                                </div>
                                <ul className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#6a6f73]">
                                    <li>{RandomNumber()} total hours</li>
                                    <BiSolidCircle size={7} />
                                    <li>{RandomNumber()} lectures</li>
                                    <BiSolidCircle size={7} />
                                    <li>{RandomLevel()}</li>
                                </ul>
                            </div>
                        </Link>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#5624d0] lg:mt-0 lg:block lg:text-right">
                        <div className="cursor-pointer lg:mb-2.5" onClick={removeHandle}>
                            Remove
                        </div>

                        {!isWashListAdded && (
                            <div className="cursor-not-allowed opacity-80 lg:mb-2.5">
                                Save For Later
                            </div>
                        )}

                        {isWashListAdded ? (
                            <div onClick={addCart} className="cursor-pointer lg:mb-2.5">
                                Move To Cart
                            </div>
                        ) : (
                            <div onClick={wishList} className="cursor-pointer lg:mb-2.5">
                                Move To Washlist
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Buttons */}

            {/* Product Price Detalist */}
            <div className="flex items-center gap-1 self-end bg-white text-lg font-bold text-[#a435f0] sm:self-start">
                ${product.price}
                <IoTicket className="rotate-[270deg]" />
            </div>
        </div>
    );
};

export default PageShopItem;
