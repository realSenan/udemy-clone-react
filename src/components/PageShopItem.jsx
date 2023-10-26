import React from "react";
import Star from "../pages/Home/Main/ProductFilterSection/Star";

import { BiSolidCircle } from "react-icons/bi";
import { IoTicket } from "react-icons/io5";
import { RandomLevel, RandomNumber } from "../hooks/useRandom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/shopSlice";
import toast from "react-hot-toast";
import { addWashList } from "../redux/wishList";
import { useEffect } from "react";
import { useState } from "react";

const PageShopItem = ({ product }) => {
    const dispatch = useDispatch();
    const [isWashListAdded, setIsWashListAdded] = useState(false);
    const isLogin = useSelector((state) => state.auth.isLogin);

    const washData = useSelector((state) => state.wish.data);

    const removeHandle = (e) => {
        dispatch(removeProduct(product.id));
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
            }
        }
    };

    return (
        <div className="border-t border-border py-5 sm:flex items-start gap-5  justify-between">
            <div className="flex items-start sm:gap-5 gap-2 w-[90%]">
                <Link to={`/course?id=${product.id}`} className="w-16 h-12 sm:w-32 sm:h-16">
                    <img src={product.img} className="object-cover w-full h-full" />
                </Link>
                <div className="lg:flex items-start justify-between w-full">
                    <div>
                        <Link to={`/course?id=${product.id}`}>
                            <h2 className="text-liColor font-bold line-clamp-2 ">
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
                                <ul className="flex items-center gap-2 text-xs text-[#6a6f73] mt-1">
                                    <li>{RandomNumber()} total hours</li>
                                    <BiSolidCircle size={7} />
                                    <li>{RandomNumber()} lectures</li>
                                    <BiSolidCircle size={7} />
                                    <li>{RandomLevel()}</li>
                                </ul>
                            </div>
                        </Link>
                    </div>
                    <div className="text-sm text-[#5624d0] lg:text-right lg:block flex items-start gap-2 sm:gap-5 lg:mt-0 mt-2">
                        <div className="mb-2.5 min-w-max cursor-pointer" onClick={removeHandle}>
                            Remove
                        </div>
                        <div className="mb-2.5 min-w-max opacity-80 cursor-not-allowed">
                            Save For Later
                        </div>
                        <div
                            onClick={wishList}
                            className={`mb-2.5 min-w-max cursor-pointer ${
                                isWashListAdded && "hidden"
                            }`}
                        >
                            Move To Washlist
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons */}

            {/* Product Price Detalist */}
            <div className="text-[#a435f0] text-lg flex items-center font-bold gap-1 bg-white sm:ms-0 ms-14">
                ${product.price}
                <IoTicket className="rotate-[270deg]" />
            </div>
        </div>
    );
};

export default PageShopItem;
