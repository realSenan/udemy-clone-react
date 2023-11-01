import React from "react";
import { Link } from "react-router-dom";
import Star from "../pages/Home/Main/ProductFilterSection/Star";
import { RandomLevel, RandomNumber } from "../hooks/useRandom";
import { BiSolidCircle } from "react-icons/bi";

const SearchCart = ({ product }) => {
    return (
        <div className="border-t border-border py-5 sm:flex items-start gap-5  justify-between">
            <div className="flex items-start sm:gap-5 gap-2 w-[90%]">
                <Link to={`/course?id=${product.id}`} className="block w-80 h-36 ">
                    <img src={product.img} className="object-cover w-full h-full" />
                </Link>
                <div className="lg:flex items-start justify-between w-full">
                    <div>
                        <Link to={`/course?id=${product.id}`}>
                            <h2 className="text-liColor font-bold line-clamp-2 ">
                                {product["headTexts:"]}
                            </h2>
                            <p className="text-sm text-disableColor line-clamp-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
                                distinctio iste dolor id, voluptatum corporis impedit rerum sunt
                                praesentium et, voluptate ab dignissimos enim ipsum nisi omnis sit
                                aliquid debitis. Atque ex explicabo ipsa quod praesentium temporibus
                                corporis nulla, voluptatem eveniet neque, incidunt velit
                            </p>
                            <h3 className="text-[.8125rem] mb-1">{product["user:"]}</h3>

                            <div>
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
                </div>
            </div>
        </div>
    );
};

export default SearchCart;
