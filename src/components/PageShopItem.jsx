import React from "react";
import Star from "../pages/Home/Main/ProductFilterSection/Star";

const PageShopItem = ({ product }) => {
    return (
        <div className="border-t border-border py-5 flex items-start gap-5">
            <img src={product.img} className="w-32 h-16" />
            <div className="">
                <h2 className="text-liColor font-bold">{product["headTexts:"]}</h2>
                <h3 className="text-[.8125rem]">{product["user:"]}</h3>
                <div className="mt-1">
                    <div className="flex items-center gap-3">
                        {product.bestseller && (
                            <div className="text-[#3c3b0a] bg-[#e6e592] w-min text-[12px] px-2 py-1 font-bold">
                                Bestseller
                            </div>
                        )}
                        <Star product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageShopItem;
