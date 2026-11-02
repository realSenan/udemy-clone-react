import { useEffect, useState } from "react";
import defaultPng from "/src/assets/img/loading.jpg";
import Star from "../pages/Home/Main/ProductFilterSection/Star";
import ToolTips from "./ToolTips";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

const Cards = ({ product }) => {
  const portalTooltip = window.location.pathname === "/search";
  const [ToolTip, setToolTip] = useState(false);
  const [left, setLeft] = useState("220px");
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const enterMouseHandler = (e) => {
    if (window.location.pathname !== "/my-courses/wishlist") {
      setToolTip(true);
    }

    const bounds = e.currentTarget.getBoundingClientRect();
    if (window.innerWidth - bounds.right < 380) {
      setLeft("-23.75rem");
    } else {
      setLeft("13.75rem");
    }
    if (portalTooltip) {
      const tooltipHeight = 476;
      const tooltipWidth = Math.min(368, window.innerWidth - 16);
      const top = Math.min(
        Math.max(8, bounds.top - 112),
        Math.max(8, window.innerHeight - tooltipHeight - 8),
      );
      const left = Math.min(
        Math.max(
          8,
          bounds.right + tooltipWidth + 8 > window.innerWidth
            ? bounds.left - tooltipWidth - 8
            : bounds.right + 8,
        ),
        window.innerWidth - tooltipWidth - 8,
      );
      setTooltipPosition({ top, left });
    }
  };

  const leaveMouseHandler = () => {
    setToolTip(false);
  };

  useEffect(() => {
    if (!portalTooltip || !ToolTip) return undefined;
    window.addEventListener("scroll", leaveMouseHandler, true);
    return () => window.removeEventListener("scroll", leaveMouseHandler, true);
  }, [portalTooltip, ToolTip]);

  const tooltip = ToolTip && (
    <div
      className="z-[9999999999999] px-4"
      style={
        portalTooltip
          ? { position: "fixed", top: tooltipPosition.top, left: tooltipPosition.left }
          : { position: "absolute", top: "-7rem", left }
      }
    >
      <ToolTips product={product} tp={ToolTip} />
    </div>
  );

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
      {!portalTooltip && tooltip}
      {portalTooltip && tooltip && createPortal(tooltip, document.body)}
    </div>
  );
};

export default Cards;
