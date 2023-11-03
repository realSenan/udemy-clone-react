import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Star from "../Home/Main/ProductFilterSection/Star";
import {
    BsPatchExclamationFill,
    BsGlobe,
    BsCreditCard2FrontFill,
    BsFillPlayFill,
} from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart, AiOutlinePlayCircle } from "react-icons/ai";

const Course = () => {
    const location = useLocation();
    const id = location.search.slice(4);

    const MainData = useSelector((state) => state.data.product);
    const Cart = MainData.find((mProduct) => mProduct.id == id);

    return (
        <div>
            <div className="fixed w-full z-10 top-0 h-16 bg-activeButton text-white p-2 shadow-lg">
                <h1 className="font-bold">{Cart["headTexts:"]}</h1>
                <Star product={Cart} clr={"!text-[#f69c08]"} clr2={"!text-[#c0c4fc] ms-2"} />
            </div>

            <div className="h-[18.75rem] bg-activeButton">
                <div className="container  max-w-[1340px] overflow-hidden pt-5 flex gap-12 justify-around">
                    <div className="max-w-[43.75rem] text-white">
                        <h1 className=" font-bold text-3xl ">{Cart["headTexts:"]}</h1>
                        <p className="mt-4  text-xl">
                            Learn: HTML | CSS | JavaScript | Web programming | Web development |
                            Front-end | Responsive | JQuery
                        </p>
                        <h3 className=" mt-4">
                            <Star
                                product={Cart}
                                clr={"!text-[#f69c08]"}
                                clr2={"!text-[#c0c4fc] ms-2"}
                            />
                        </h3>
                        <h4 className="mt-2">
                            Created by <span className="!text-[#c0c4fc]">{Cart["user:"]} </span>
                        </h4>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm">
                                <BsPatchExclamationFill />
                                Last updated 8/2023
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <BsGlobe />
                                English
                            </div>
                            <div className="flex items-center gap-2 text-sm m-3">
                                <BsCreditCard2FrontFill />
                                English [Auto]
                            </div>
                        </div>
                    </div>

                    <div className="w-[21.25rem] z-10">
                        <picture className="h-52 block relative overflow-hidden">
                            <img className="w-full h-full object-cover" src={Cart.img} />

                            <div className="w-full h-full absolute top-0 linear z-10 flex items-center justify-center flex-col pt-12">
                                <span className="cursor-pointer hover:bg-[#e3e7ea] h-16 w-16 rounded-full bg-white flex items-center justify-center">
                                    <BsFillPlayFill size={44} />
                                </span>
                                <div className="font-bold text-white mt-5">Preview this course</div>
                            </div>
                        </picture>

                        <div className="p-4 bg-white ">
                            <div className="font-bold text-3xl text-activeButton">
                                ${Cart.price}
                            </div>

                            <div className="grid grid-cols-5 mt-3 gap-2">
                                <button className="bg-[#a435f0] hover:bg-[#8710d8] font-bold text-white py-3 col-start-1 col-end-5">
                                    Add to cart
                                </button>
                                <button className="border hover:bg-[#e3e7ea] flex items-center justify-center">
                                    <AiOutlineHeart size={25} />
                                </button>
                                <button className="border hover:bg-[#e3e7ea] font-bold text-activeButton py-3 row-start-2 col-span-5">
                                    Buy now
                                </button>
                            </div>
                            <div className="text-xs my-4 text-center text-activeButton mx-auto">
                                30-Day Money-Back Guarantee
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
