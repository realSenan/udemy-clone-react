import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Cards from "../../../../components/Cards";
import { nanoid } from "nanoid";

const BestSeller = () => {
    const productDatas = useSelector((state) => state.data.product);

    return (
        <div className="container max-w-[1340px] py-8  mt-10 px-5">
            <h2 className="font-bold text-2xl mb-4 text-liColor">Students are viewing</h2>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={28}
                className=" !overflow-y-visible "
                navigation={{
                    nextEl: ".image-swiper-button-next",
                    prevEl: ".image-swiper-button-prev",
                    disabledClass: "swiper-button-disabled",
                }}
                modules={[Navigation]}
            >
                {productDatas
                    .filter((product) => product.bestseller == true)
                    .map((product) => (
                        <SwiperSlide
                            key={nanoid()}
                            id={product.id}
                            className="w-fit !overflow-visible"
                        >
                            <Cards product={product} />
                        </SwiperSlide>
                    ))}

                <button className="image-swiper-button-next absolute right-0 top-[20%] z-10 w-12 h-12 bg-[#393c3ee8] hover:bg-[#393c3ef3] rounded-full flex items-center justify-center cursor-pointer">
                    <IoIosArrowForward size={28} color="#fff" />
                </button>
                <button className="image-swiper-button-prev absolute left-0 top-[20%] z-10 w-12 h-12 bg-[#393c3ee8] hover:bg-[#393c3ef3] rounded-full flex items-center justify-center cursor-pointer">
                    <IoIosArrowBack size={28} color="#fff" />
                </button>
            </Swiper>
        </div>
    );
};

export default BestSeller;
