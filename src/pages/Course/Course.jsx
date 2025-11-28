import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Star from "../Home/Main/ProductFilterSection/Star";
import {
  BsPatchExclamationFill,
  BsGlobe,
  BsCreditCard2FrontFill,
  BsFillPlayFill,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import toast from "react-hot-toast";
import { addProduct, removeProduct } from "../../redux/shopSlice";
import { CgSpinnerTwo } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { useScroll } from "../../hooks/useScroll";
import { addWashList, removeWashList } from "../../redux/wishList";

const Course = () => {
  const location = useLocation();
  const id = location.search.slice(4);
  const [wishlist, setWishlist] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const MainData = useSelector((state) => state.data.product);
  const Cart = MainData.find((mProduct) => mProduct.id == id);

  // Örnek müfredat verisi
  const curriculumData = [
    {
      id: 1,
      title: "Giriş",
      duration: "10:00",
      lectures: 2,
      items: [
        { title: "Kursa Genel Bakış", duration: "05:00", type: "video" },
        { title: "Kurulum ve Gereksinimler", duration: "05:00", type: "video" },
      ],
    },
    {
      id: 2,
      title: "HTML Temelleri",
      duration: "45:30",
      lectures: 5,
      items: [
        { title: "HTML Nedir?", duration: "10:00", type: "video" },
        { title: "Temel Etiketler", duration: "15:30", type: "video" },
        { title: "Formlar ve Inputlar", duration: "20:00", type: "video" },
      ],
    },
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const learningObjectives = [
    "Modern HTML5 ve CSS3 teknikleri",
    "Responsive web tasarım prensipleri",
    "JavaScript ES6+ özellikleri",
    "React.js temel kavramları",
    "Web uygulaması deployment süreçleri",
  ];

  const isLogin = useSelector((state) => state.auth.isLogin);
  const shopData = useSelector((state) => state.shop.shopData);
  const washData = useSelector((state) => state.wish.data);

  const [clicked, setClicked] = useState(false);
  //  Cart loading
  const [cartLoading, setCartLoading] = useState(false);
  // Change block with loading
  const [cartLastLoad, setCartLastLoad] = useState(false);

  const isValid = shopData.some((productD) => productD.id == Cart.id);

  const [isWashListAdded, setIsWashListAdded] = useState(false);

  const dispatch = useDispatch();

  const addCart = () => {
    if (!isValid) {
      setClicked(true);
      setCartLoading(true);
      dispatch(addProduct(Cart));

      setTimeout(() => {
        setCartLastLoad(true);
        setCartLoading(false);
        toast.success(
          `Succesfly added  ${
            Cart.category[0].toUpperCase() + Cart.category.slice(1)
          } course`
        );
      }, 2000);
    }
  };

  const navigate = useNavigate();

  const wishList = () => {
    if (!isLogin) {
      navigate("/login");
    } else {
      clicked && (setIsWashListAdded(true), dispatch(removeProduct(Cart.id)));

      if (isWashListAdded) {
        washData.find(
          (wProduct) => Cart.id == wProduct.id && setIsWashListAdded(true)
        );
      } else {
        setIsWashListAdded(true);
        toast.success("WishList Added!");
        dispatch(addWashList(Cart));
      }
    }
  };

  const RemoveWishList = () => {
    setIsWashListAdded(false);
    toast.success("WishList Removed!");
    dispatch(removeWashList(Cart.id));
  };

  useEffect(() => {
    washData.find(
      (wProduct) => Cart.id == wProduct.id && setIsWashListAdded(true)
    );

    if (isValid) {
      setClicked(true);
      setTimeout(() => {
        setCartLastLoad(true);
        setCartLoading(false);
      }, 2000);
    }
  }, [clicked]);

  return (
    <div className="mb-20">
      <div className="fixed w-full z-20 top-0 h-16 bg-activeButton text-white p-2 shadow-lg">
        <h1 className="font-bold">{Cart["headTexts:"]}</h1>
        <Star
          product={Cart}
          clr={"!text-[#f69c08]"}
          clr2={"!text-[#c0c4fc] ms-2"}
        />
      </div>

      <div className="h-[20rem] bg-activeButton pb-10 absolute z-10 top-0 w-full"></div>
      <div className="flex max-lg:flex-col-reverse items-center lg:items-start  lg:justify-between gap-10 px-10">
        <div className="container max-w-[1340px] overflow-hidden pt-5  gap-12 justify-around relative z-10">
          <div className="max-w-[43.75rem] text-softBlack lg:text-white">
            <h1 className="font-bold text-3xl">{Cart["headTexts:"]}</h1>
            <p className="mt-4 text-xl">
              Learn: HTML | CSS | JavaScript | Web programming | Web development
              | Front-end | Responsive | JQuery
            </p>
            <h3 className="mt-4">
              <Star
                product={Cart}
                clr={"!text-[#f69c08]"}
                clr2={"!text-[#c0c4fc] ms-2"}
              />
            </h3>
            <h4 className="mt-2">
              Created by{" "}
              <span className="!text-[#c0c4fc]">{Cart["user:"]}</span>
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

          {/* Kurs İçeriği Bölümü */}
          <div className="  mt-8">
            {/* Sol Taraf - Ana İçerik */}
            <div className="lg:col-span-2">
              {/* Öğrenilecekler */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {learningObjectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>{objective}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Müfredat */}
              <div className="bg-white p-6 rounded-lg shadow-sm border mt-6">
                <h2 className="text-2xl font-bold mb-4">Course Content</h2>
                <div className="space-y-2">
                  {curriculumData.map((section) => (
                    <div key={section.id} className="border rounded-lg">
                      <button
                        className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
                        onClick={() => toggleSection(section.id)}
                      >
                        <div>
                          <span className="font-semibold">{section.title}</span>
                          <div className="text-sm text-gray-600 mt-1">
                            {section.lectures} lectures • {section.duration}
                          </div>
                        </div>
                        {expandedSections[section.id] ? (
                          <BsChevronUp />
                        ) : (
                          <BsChevronDown />
                        )}
                      </button>
                      {expandedSections[section.id] && (
                        <div className="p-4 border-t bg-gray-50">
                          {section.items.map((item, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center py-2"
                            >
                              <div className="flex items-center gap-3">
                                <AiOutlinePlayCircle className="text-gray-400" />
                                <span>{item.title}</span>
                              </div>
                              <span className="text-sm text-gray-600">
                                {item.duration}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Gereksinimler */}
              <div className="bg-white p-6 rounded-lg shadow-sm border mt-6">
                <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Basic computer knowledge</li>
                  <li>No programming experience needed</li>
                  <li>Any computer will work - Windows, macOS or Linux</li>
                </ul>
              </div>

              {/* Açıklama */}
              <div className="bg-white p-6 rounded-lg shadow-sm border mt-6">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <div className="text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    This comprehensive course will take you from beginner to
                    advanced level in web development. You'll learn the latest
                    technologies and best practices used in the industry today.
                  </p>
                  <p>
                    Through hands-on projects and real-world examples, you'll
                    build a solid foundation in front-end development and create
                    responsive, interactive websites.
                  </p>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Yan Bilgiler */}
            <div className="space-y-6 mt-6">
              {/* Özellikler */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-bold text-lg mb-4">Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Full lifetime access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Access on mobile and TV</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Certificate of completion</span>
                  </div>
                </div>
              </div>

              {/* Hedef Kitle */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-bold text-lg mb-4">
                  Who this course is for:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Beginner web developers</li>
                  <li>Students learning web development</li>
                  <li>Career changers entering tech industry</li>
                  <li>Anyone interested in building websites</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-[21.25rem]  max-lg:w-[70%] lg:sticky top-20 mt-20 z-10 shadow-shadowCart mb-4 rounded-2xl bg-white overflow-hidden">
          <picture className=" lg:h-52 block relative overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={Cart.img}
              alt={Cart["headTexts:"]}
            />
            <div className="w-full h-full absolute top-0 linear z-10 flex items-center justify-center flex-col pt-12">
              <span className="cursor-pointer hover:bg-[#e3e7ea] h-16 w-16 rounded-full bg-white flex items-center justify-center">
                <BsFillPlayFill size={44} />
              </span>
              <div className="font-bold text-white mt-5">
                Preview this course
              </div>
            </div>
          </picture>

          <div className="p-4 ">
            <div className="font-bold text-3xl text-activeButton">
              ${Cart.price}
            </div>

            {/* <div className="grid grid-cols-5 mt-3 gap-2">
              <button
                onClick={addCart}
                className="bg-[#a435f0] hover:bg-[#8710d8] font-bold text-white py-3 col-start-1 col-end-5"
              >
                Add to cart
              </button>
              <button
                className="border hover:bg-[#e3e7ea] flex items-center justify-center"
                onClick={() => setWishlist(!wishlist)}
              >
                {wishlist ? (
                  <AiFillHeart size={25} />
                ) : (
                  <AiOutlineHeart size={25} />
                )}
              </button>
              <button className="border hover:bg-[#e3e7ea] font-bold text-activeButton py-3 row-start-2 col-span-5">
                Buy now
              </button>
            </div> */}
            <div className="flex items-center  gap-5 mt-4  ">
              {/* Clicked after */}
              <Link
                onClick={useScroll}
                to={`/cart-shop`}
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
                <div
                  className={`animate-spin w-min mx-auto cursor-not-allowed`}
                >
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

              <div
                onClick={isWashListAdded ? RemoveWishList : wishList}
                className="border rounded-full !w-12 h-12 flex items-center justify-center bg-white hover:bg-[#e3e7ea] duration-300 transition-all cursor-pointer"
              >
                {isWashListAdded ? (
                  <AiFillHeart size={24} />
                ) : (
                  <FiHeart size={24} />
                )}
              </div>
            </div>

            <div className="text-xs my-4 lg:text-center text-activeButton mx-auto">
              30-Day Money-Back Guarantee
            </div>

            <div className="mt-4 space-y-2 text-sm  ">
              <div className="flex justify-between ">
                <span>Course includes:</span>
              </div>
              <div className="flex items-center gap-2 ">
                <AiOutlinePlayCircle />
                <span>10.5 hours on-demand video</span>
              </div>
              <div className="flex items-center gap-2 ">
                <span>📚</span>
                <span>42 articles</span>
              </div>
              <div className="flex items-center gap-2 ">
                <span>📥</span>
                <span>51 downloadable resources</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
