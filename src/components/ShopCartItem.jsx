import React from "react";
const ShopCartItem = ({ product }) => {
    return (
        <div className="flex items-start gap-2">
            <img src={product.img} className="w-16 h-16 object-cover" />
            <div className="">
                <div className="line-clamp-2 font-bold text-liColor leading-4">
                    {product["headTexts:"]}
                </div>
                <div className="text-sm text-disableColor mt-1">{product["user:"]}</div>
                <div className=" text-liColor font-extrabold mt-0.5">${product.price}</div>
            </div>
        </div>
    );
};

export default ShopCartItem;
