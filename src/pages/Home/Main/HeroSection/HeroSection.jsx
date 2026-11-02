import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideImg1 from "/src/assets/img/slider/slider5.jpg";
import slideImg2 from "/src/assets/img/slider/slider4.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "../../../../redux/searchSlice";
import { useLocation, useNavigate } from "react-router-dom";

function HeroSection() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.search.value);

    const submitSearch = (event) => {
        event.preventDefault();
        navigate("/search");
    };

    useEffect(() => {
        if (!location.state?.focusHomeSearch) return;

        const searchInput = document.getElementById("home-search-input");
        searchInput?.scrollIntoView({ behavior: "smooth", block: "center" });
        window.setTimeout(() => searchInput?.focus({ preventScroll: true }), 250);
    }, [location.state]);

    const settings = {
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        loop: true,
    };
    return (
        <React.Fragment>
            <Slider {...settings} className="overflow-hidden container max-w-[1340px]">
                <div className="relative ">
                    <picture className="focus:outline-none">
                        <img
                            className="max-[700px]:min-h-[250px]  object-cover "
                            src={slideImg2}
                            alt=""
                        />
                    </picture>
                    <div className="z-10 max-[700px]:hidden w-[400px] max-[982px]:w-[340px] min-[1200px]:w-[440px] p-6 invisible sm:visible absolute top-7 min-[1200px]:top-16 left-16 bg-[#fff] shadow-lg">
                        <h2 className="text-[#2d2f31] text-3xl font-bold mb-2 font-SusseWorks">
                            A sale as big as your dreams
                        </h2>
                        <p className="text-[#2d3f52] max-[982px]:text-sm">
                            Courses start at $9.99 through Aug 31. Opportunities like this only come
                            once in a season.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <picture className="focus:outline-none">
                        <img
                            className="max-[700px]:min-h-[250px]  object-cover"
                            src={slideImg1}
                            alt=""
                        />
                    </picture>

                    <div className="z-10 max-[700px]:hidden w-[400px] max-[982px]:w-[340px] min-[1200px]:w-[440px] p-4 invisible sm:visible absolute top-3 min-[982px]:top-10 min-[1200px]:top-16 left-16 bg-[#fff] shadow-lg">
                        <h2 className="text-[#2d2f31] text-3xl font-bold mb-2 font-SusseWorks max-[982px]:text-[20px] sm:line-clamp-1 lg:line-clamp-none">
                            Unlock the power of your people
                        </h2>
                        <p className="text-[#2d3f52] max-[982px]:text-sm">
                            Udemy Business is trusted by 12.5K+ companies around the world. Find out
                            what we can do for yours.
                        </p>
                        <button className="bg-[#202020] hover:bg-[#000000] transition duration-200 text-[white] mt-4 p-3">
                            Request a demo
                        </button>
                    </div>
                </div>
            </Slider>

            <div className="block min-[700px]:hidden container px-5 mt-2">
                <h3 className="font-SusseWorks text-2xl mb-2 text-[#2d2f31] ">
                    A sale as big as your dreams
                </h3>
                <p className="text-sm text-liColor">
                    Courses start at $9.99 through Aug 31. Opportunities like this only come once in
                    a season.
                </p>
                <form onSubmit={submitSearch} className="mt-12 flex items-center justify-between border">
                    <input
                        id="home-search-input"
                        className="w-full p-3 outline-none"
                        type="text"
                        value={searchValue}
                        onChange={(event) => dispatch(changeValue(event.target.value))}
                        placeholder="What do you want to learn?"
                    />{" "}
                    <button type="submit" aria-label="Search courses" className="me-4 shrink-0">
                        <AiOutlineSearch size={24} />
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default HeroSection;
