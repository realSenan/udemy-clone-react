import React from "react";
import Img1 from "/src/assets/img/TopCategory/1.jpg";
import Img2 from "/src/assets/img/TopCategory/2.jpg";
import Img3 from "/src/assets/img/TopCategory/3.jpg";
import Img4 from "/src/assets/img/TopCategory/4.jpg";
import Img6 from "/src/assets/img/TopCategory/6.jpg";
import Img7 from "/src/assets/img/TopCategory/7.jpg";
import Img8 from "/src/assets/img/TopCategory/8.jpg";
import Img9 from "/src/assets/img/TopCategory/9.jpg";
import { Link } from "react-router-dom";

const TopCategory = () => {
  return (
    <div className="container max-w-[1340px] py-8 md:py-16  px-5">
      <h2 className="font-bold text-2xl text-liColor">Top categories</h2>

      <div className="grid mobil:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center mt-10 lg:gap-7 gap-10">
        <Link onClick={() => window.scrollTo(0, 0)} to={"/search/?Design"}>
          <picture className="max-w-[18.75rem] max-h-[18.75rem] block overflow-hidden cursor-pointer">
            <img
              src={Img1}
              className="w-full hover:scale-105 transition-all duration-300"
            />
          </picture>
          <h3 className="text-liColor font-bold text-xl mt-1">Design</h3>
        </Link>
        <Link onClick={() => window.scrollTo(0, 0)} to={"/search/?Development"}>
          <picture className="max-w-[18.75rem] max-h-[18.75rem] block overflow-hidden cursor-pointer">
            <img
              src={Img2}
              className="w-full hover:scale-105 transition-all duration-300"
            />
          </picture>
          <h3 className="text-liColor font-bold text-xl mt-1">Development</h3>
        </Link>
        <Link onClick={() => window.scrollTo(0, 0)} to={"/search/?Marketing"}>
          <picture className="max-w-[18.75rem] max-h-[18.75rem] block overflow-hidden cursor-pointer">
            <img
              src={Img3}
              className="w-full hover:scale-105 transition-all duration-300"
            />
          </picture>
          <h3 className="text-liColor font-bold text-xl mt-1">Marketing</h3>
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={"/search/?IT and Software"}
          className="hidden mobil:block"
        >
          <picture className="max-w-[18.75rem] max-h-[18.75rem] block overflow-hidden cursor-pointer">
            <img
              src={Img4}
              className="w-full hover:scale-105 transition-all duration-300"
            />
          </picture>
          <h3 className="text-liColor font-bold text-xl mt-1">
            IT and Software
          </h3>
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={"/search/?Personal Development"}
          className="hidden mobil:block"
        >
          <picture className="max-w-[18.75rem] max-h-[18.75rem] block overflow-hidden cursor-pointer">
            <img
              src={Img6}
              className="w-full hover:scale-105 transition-all duration-300"
            />
          </picture>
          <h3 className="text-liColor font-bold text-xl mt-1">
            Personal Development
          </h3>
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={"/search/?Business"}
          className="hidden mobil:block"
        >
          <picture className="max-w-[18.75rem] max-h-[18.75rem] block overflow-hidden cursor-pointer">
            <img
              src={Img7}
              className="w-full hover:scale-105 transition-all duration-300"
            />
          </picture>
          <h3 className="text-liColor font-bold text-xl mt-1">Business</h3>
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={"/search/?Photography"}
          className="hidden mobil:block"
        >
          <picture className="max-w-[18.75rem] max-h-[18.75rem] block overflow-hidden cursor-pointer">
            <img
              src={Img8}
              className="w-full hover:scale-105 transition-all duration-300"
            />
          </picture>
          <h3 className="text-liColor font-bold text-xl mt-1">Photography</h3>
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={"/search/?Music"}
          className="hidden mobil:block"
        >
          <picture className="max-w-[18.75rem] max-h-[18.75rem] block overflow-hidden cursor-pointer">
            <img
              src={Img9}
              className="w-full hover:scale-105 transition-all duration-300"
            />
          </picture>
          <h3 className="text-liColor font-bold text-xl mt-1">Music</h3>
        </Link>
      </div>
    </div>
  );
};

export default TopCategory;
