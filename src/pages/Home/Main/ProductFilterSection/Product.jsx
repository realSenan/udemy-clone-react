import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Cards from "../../../../components/Cards";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { changeValue } from "../../../../redux/searchSlice";

const Product = () => {
  const productDatas = useSelector((state) => state.data.product);
  const buttons = useSelector((state) => state.button.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAvailable = (buttonId) => productDatas.some((product) => product.category === buttonId);
  const activeButton = buttons?.find((btn) => btn.status && isAvailable(btn.id)) || buttons?.find((btn) => isAvailable(btn.id));
  const buttonContext = useSelector((state) => state.button.buttonContext);

  const sliderWrapper = useRef();

  const exploreActiveTopic = () => {
    if (!activeButton) return;
    const searchTerm = {
      python: "Python",
      excel: "Excel",
      webdev: "Web Development",
      js: "JavaScript",
    }[activeButton.id];

    dispatch(changeValue(""));
    navigate(`/search?${encodeURIComponent(searchTerm)}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="container  max-w-[1340px] mt-20 px-5">
      <section className="text-softBlack">
        <h2 className="font-SusseWorks text-3xl">
          A broad selection of courses
        </h2>
        <p className="text-xl mt-5">
          Choose from over 210,000 online video courses with new additions
          published every month
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
          <SwiperSlide
            key={nanoid()}
            className="whitespace-nowrap me-5 !w-fit "
          >
            <Button btn={btn} sliderWrapper={sliderWrapper} isAvailable={isAvailable(btn.id)} />
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
        {activeButton && (
          <section>
            <h2 className="font-bold text-softBlack text-2xl ">
              {activeButton["head text"]}
            </h2>
            <p className="mt-3 max-w-[800px] line-clamp-3">
              {activeButton["paragraph text"]}
            </p>
            <button
              type="button"
              onClick={exploreActiveTopic}
              className="mt-5 border border-liColor px-3 py-2 text-sm font-extrabold text-softBlack transition-colors hover:bg-gray-secondary"
            >
              Explore {activeButton.text}
            </button>
          </section>
        )}

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
                onClick={() => window.scrollTo(0, 0)}
                id={product.id}
                className={`w-fit ${
                  product.category == (activeButton?.id || buttonContext) ? "block" : "hidden"
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
