import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { IoIosArrowBack, IoIosArrowForward, IoMdVolumeHigh } from "react-icons/io";
import Cards from "../../../../components/Cards";
import { useRef } from "react";

const Product = () => {

    const dispatch = useDispatch();



    const productDatas = useSelector((state) => state.data.product);

    const buttons = useSelector((state) => state.button.value);

    const filterButtonForProduct = buttons?.filter((btn) => btn.status == true);

    const sliderWrapper = useRef();

    const buttonContext = useSelector(state => state.button.buttonContext)

    return (
        <section className="container  max-w-[1340px] mt-20 px-5">
            <section className="text-softBlack">
                <h2 className="font-SusseWorks text-3xl">A broad selection of courses</h2>
                <p className="text-xl mt-5">
                    Choose from over 210,000 online video courses with new additions published every
                    month
                </p>
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
                className="mySwiper my-5 !mx-0 "
            >
                {buttons?.map((btn) => (
                    <SwiperSlide key={nanoid()} className="whitespace-nowrap me-5 !w-fit ">
                        <Button btn={btn} sliderWrapper={sliderWrapper} />
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
                {filterButtonForProduct?.map((bt) => (
                    <section key={nanoid()}>
                        <h2 className="font-bold text-softBlack text-2xl ">{bt["head text"]}</h2>
                        <p className="mt-3 max-w-[800px] line-clamp-3">{bt["paragraph text"]}</p>
                        <button className="border py-2 px-3 text-sm mt-5 font-extrabold text-softBlack hover:bg-[#6a6f7348]">
                            Explore {bt.text}
                        </button>
                    </section>
                ))}

                {/* Swipper Section */}
                <Swiper
                    ref={sliderWrapper}
                    slidesPerView={"auto"}
                    spaceBetween={15}
                    className="mt-10 !overflow-y-visible "
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled",
                    }}
                    modules={[Navigation]}
                >
                    {productDatas.map((product) => {
                        return (
                            <SwiperSlide
                                key={nanoid()}
                                id={product.id}
                                className={`w-fit ${
                                    product.category == buttonContext ? "block" : "hidden"
                                }`}
                            >
                                <Cards product={product} />
                            </SwiperSlide>
                        );
                    })}

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
