import Cards from "../../../components/Cards";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { removeWashList } from "../../../redux/wishList";

const WishlistP = () => {
  const wishData = useSelector((state) => state.wish.data);
  const dispatch = useDispatch();

  const removeWashListF = (product) => {
    dispatch(removeWashList(product.id));
  };

  return (
    <div
      className={` h-[23.30rem] ${
        wishData.length == 0 && "flex items-center justify-center"
      } `}
    >
      {wishData.length == 0 ? (
        <Link
          className="inline-block py-3 px-5 bg-liColor text-white font-bold"
          to={"/"}
        >
          Browse courses now
        </Link>
      ) : (
        <Swiper
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
          {wishData.map((product) => {
            return (
              <SwiperSlide key={nanoid()} id={product.id} className={`w-fit`}>
                <div className="relative">
                  <Cards product={product} />
                  <div
                    className="absolute top-2 right-3 cursor-pointer w-6 h-6"
                    onClick={() => removeWashListF(product)}
                  >
                    <FaHeart size={24} color="white" />
                  </div>
                </div>
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
      )}
    </div>
  );
};

export default WishlistP;
