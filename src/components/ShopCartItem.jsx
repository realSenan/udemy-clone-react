import React from "react";
import { Link } from "react-router-dom";
const ShopCartItem = ({ product }) => {
    return (
        <Link to={`course?id=${product.id}`}>
            <div className="flex items-start gap-2 cursor-pointer">
                <img src={product.img} className="w-16 h-16 object-cover" />
                <div className="">
                    <div className="line-clamp-2 font-bold text-liColor leading-4">
                        {product["headTexts:"]}
                    </div>
                    <div className="text-sm text-disableColor mt-1">{product["user:"]}</div>
                    <div className=" text-liColor font-extrabold mt-0.5">${product.price}</div>
                </div>
            </div>
        </Link>
    );
};

export default ShopCartItem;
