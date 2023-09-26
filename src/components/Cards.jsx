import React, { useState } from "react";
import defaultPng from "/src/assets/img/loading.jpg";
import Star from "../pages/Home/Main/ProductFilterSection/Star";
import ToolTips from "./ToolTips";

const Cards = ({ product }) => {
    const [ToolTip, setToolTip] = useState(false);

    return (
        <div onMouseEnter={(e) => setToolTip(true)} onMouseLeave={(e) => setToolTip(false)} >
            <div className={`!w-[14.375rem] h-[17.5rem]  bg-white `}>
                <picture className="block h-[130px] border border-border bg-liColor">
                    <img
                        className={`w-full ${ToolTip && "opacity-95"} transition-all duration-200`}
                        src={product.img || defaultPng}
                        alt="xs"
                    />
                </picture>
                <section className="mt-2">
                    <h3 className="font-extrabold text-softBlack line-clamp-2 leading-5">
                        {product["headTexts:"]}
                    </h3>
                    <h4 className="text-sm mt-1 font-medium text-softBlack">{product["user:"]}</h4>
                    <Star product={product} />
                    <h3 className="font-extrabold text-md text-softBlack mt-1">${product.price}</h3>
                    {product.bestseller && (
                        <div className="text-[#3c3b0a] bg-[#e6e592] w-min text-[12px] px-2 mt-2 ">
                            Bestseller
                        </div>
                    )}
                </section>
            </div>
            {ToolTip && <ToolTips product={product} />}
        </div>
    );
};

export default Cards;
