import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/shopSlice";
import { CgSpinnerTwo } from "react-icons/cg";
import { Link } from "react-router-dom";

const ToolTips = ({ product }) => {
    const dispatch = useDispatch();

    const [clicked, setClicked] = useState(false);
    const [cartLoading, setCartLoading] = useState(false);
    const [cartLastLoad, setCartLastLoad] = useState(false);

    const addCart = (e) => {
        setCartLoading(true);
        setClicked(true);
        dispatch(addProduct(product));

        setTimeout(() => {
            setCartLastLoad(true);
            setCartLoading(false);
        }, 2000);
    };

    return (
        <div className={`w-[22.5rem] min-h-[29.75rem] shadow-dropDownBox p-4 bg-white PopDown`}>
            <>
                <h2 className="text-xl font-semibold">{product["headTexts:"]}</h2>
                <h2 className="text-[#5d8d85] text-sm mt-2">
                    Category : <span className="font-semibold capitalize">{product.category}</span>
                </h2>

                <h2>
                    <span className="font-semibold">Description :</span>{" "}
                    <span className="text-disableColor">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempore
                        totam doloribus possimus cupiditate distinctio voluptatibus praesentium
                        animi non dolorum eligendi et veniam at velit molestias architecto voluptate
                    </span>
                </h2>

                <h2 className="mt-2">
                    <span className="font-semibold">Selling : </span>{" "}
                    <span>{product.peopleNumber}</span>
                </h2>
                <h2 className="mt-4">
                    <span className="font-semibold">Creator :</span> <span>{product["user:"]}</span>
                </h2>
                <h2 className="mt-4">
                    <span className="font-semibold">Rating :</span> <span>{product.rating}</span>
                </h2>

                <h2 className="mt-4">
                    <span className="font-semibold">Price :</span> <span>${product.price}</span>
                </h2>
            </>

            <div className="flex items-center gap-5 mt-4  ">
                {/* Clicked after */}
                <Link
                    to={`cart-shop`}
                    className={`${
                        cartLastLoad ? "flex" : "hidden"
                    } py-3 bg-[#a435f0] w-64 h-12  items-center justify-center text-white hover:bg-opacity-90 transition-all duration-300 `}
                >
                    Go to cart
                </Link>

                {/* Loading animation */}
                <button
                    className={`${
                        cartLastLoad ? "hidden" : "block"
                    } py-3 bg-[#a435f0] w-64 h-12  text-white hover:bg-opacity-90 transition-all duration-300 ${
                        clicked ? "block" : "hidden"
                    } ${cartLoading && "!bg-opacity-70 cursor-not-allowed"}`}
                >
                    <div className={`animate-spin w-min mx-auto cursor-not-allowed`}>
                        <CgSpinnerTwo />
                    </div>
                </button>

                {/* Clicked before */}
                <button
                    className={`py-3 bg-[#a435f0] !w-64 h-12 text-white hover:bg-opacity-90 transition-all duration-300 ${
                        clicked ? "hidden " : "block"
                    }`}
                    onClick={addCart}
                >
                    Add To Cart
                </button>

                <div className="border rounded-full !w-12 h-12 flex items-center justify-center bg-white hover:bg-[#e3e7ea] duration-300 transition-all cursor-pointer">
                    <FiHeart size={24} />
                </div>
            </div>
        </div>
    );
};

export default ToolTips;
