import React, { useState } from "react";
import defaultPng from "/src/assets/img/loading.jpg";
import Star from "../pages/Home/Main/ProductFilterSection/Star";
import ToolTips from "./ToolTips";
import { Link } from "react-router-dom";

const Cards = ({ product }) => {
  const [ToolTip, setToolTip] = useState(false);
  const [left, setLeft] = useState("220px");

  const enterMouseHandler = (e) => {
    (window.location.pathname == "/my-courses/wishlist") == false &&
      setToolTip(true);
    const offset = e.nativeEvent.fromElement.offsetWidth;
    const item = e.currentTarget.getBoundingClientRect().left;

    if (offset - item < 530) {
      setLeft("-23.75rem");
    } else {
      setLeft("13.75rem");
    }
  };

  const leaveMouseHandler = () => {
    setToolTip(false);
  };

  return (
    <div
      onMouseEnter={enterMouseHandler}
      onMouseLeave={leaveMouseHandler}
      id={product.id}
      className="relative z-0 hover:!z-50"
    >
      <Link
        to={`/course?id=${product.id}`}
        className={`!w-[14.375rem] h-[17.5rem]  bg-white block`}
      >
        <picture className="block h-[130px] border border-border bg-liColor">
          <img
            className={`w-full ${
              ToolTip && "opacity-95"
            } transition-all duration-200`}
            src={product.img || defaultPng}
            alt="xs"
          />
        </picture>
        <section className="mt-2">
          <h3 className="font-extrabold text-softBlack line-clamp-2 leading-5">
            {product["headTexts:"]}
          </h3>
          <h4 className="text-sm mt-1 font-medium text-softBlack">
            {product["user:"]}
          </h4>
          <Star product={product} />

          <h3 className="font-extrabold text-md text-softBlack mt-1">
            ${product.price}
          </h3>
          {product.bestseller && (
            <div className="text-[#3c3b0a] bg-[#e6e592] w-min text-[12px] px-2 mt-2 ">
              Bestseller
            </div>
          )}
        </section>
      </Link>
      <div
        className={`${
          ToolTip ? "block" : "hidden"
        } absolute -top-28 z-[9999999999999] px-4`}
        style={{ left: left }}
      >
        <ToolTips product={product} tp={ToolTip} />
      </div>
    </div>
  );
};

export default Cards;
