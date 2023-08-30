import Button from "./Button";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { IoIosArrowBack, IoIosArrowForward, IoMdVolumeHigh } from "react-icons/io";
import Star from "./Star";
import defaultPng from "../../../assets/img/loading.jpg";

const Product = () => {
    useFetch(import.meta.env.VITE_DATA_API);
    const productDatas = useSelector((state) => state.data.product);
    const buttons = useSelector((state) => state.button.value);

    const filterButtonForProduct = buttons.filter((btn) => btn.status == true);

    return (
        <section className="container  max-w-[1340px] mt-20 px-5">
            <section className="text-softBlack">
                <h2 className="font-SusseWorks text-3xl">A broad selection of courses</h2>
                <p className="text-xl mt-2">Choose from over 210,000 online video courses with new additions published every month</p>
            </section>
            {/* Button filter wrapper */}
            <Swiper
                navigation={{
                    nextEl: ".image-swiper-button-next",
                    prevEl: ".image-swiper-button-prev",
                    disabledClass: "swiper-button-disabled",
                }}
                modules={[Navigation]}
                slidesPerView={"auto"}
                className="mySwiper mt-10 mb-4 !mx-0 "
            >
                {buttons?.map((btn) => (
                    <SwiperSlide key={nanoid()} className="whitespace-nowrap me-5 !w-fit ">
                        <Button btn={btn} />
                    </SwiperSlide>
                ))}

                <div className="absolute right-0 -top-[2px] z-10 image-swiper-button-next">
                    <IoIosArrowForward size={28} />
                </div>
                <div className="absolute left-[-10px] -top-[2px] z-10 image-swiper-button-prev">
                    <IoIosArrowBack size={28} />
                </div>
            </Swiper>
            {/* Button filter wrapper */}

            {/* Product filter section */}
            <section className="border p-8 border-border ">
                {filterButtonForProduct.map((bt) => (
                    <section key={nanoid()}>
                        <h2 className="font-extrabold text-softBlack text-2xl ">{bt["head text"]}</h2>
                        <p className="mt-3 max-w-[800px] line-clamp-3">{bt["paragraph text"]}</p>
                        <button className="border py-2 px-3 text-sm mt-5 font-extrabold text-softBlack hover:bg-[#6a6f7348]">
                            Explore {bt.text}
                        </button>
                    </section>
                ))}

                {/* Swipper Section */}
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    className="mt-10"
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled",
                    }}
                    modules={[Navigation]}
                >
                    {productDatas.map((product) =>
                        filterButtonForProduct.map(
                            (btCntx) =>
                                product.category == btCntx.id && (
                                    <SwiperSlide key={nanoid()} id={product.id} className="w-fit">
                                        <div className={` !w-[230px] h-[280px] `}>
                                            <picture className="block h-[130px] border border-border">
                                                <img className="w-full" src={product.img || defaultPng} alt="xs" />
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
                                    </SwiperSlide>
                                )
                        )
                    )}
                    <button className="image-swiper-button-next absolute right-0 top-[20%] z-10 w-12 h-12 bg-[#393c3ee8] hover:bg-[#393c3ef3] rounded-full flex items-center justify-center cursor-pointer">
                        <IoIosArrowForward size={28} color="#fff" />
                    </button>
                    <button className="image-swiper-button-prev absolute left-0 top-[20%] z-10 w-12 h-12 bg-[#393c3ee8] hover:bg-[#393c3ef3] rounded-full flex items-center justify-center cursor-pointer">
                        <IoIosArrowBack size={28} color="#fff" />
                    </button>
                </Swiper>
                {/* Swipper Section */}
            </section>
            {/* Product filter section */}
        </section>
    );
};

export default Product;
