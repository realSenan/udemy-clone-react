import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideImg1 from '../../../assets/img/slider/slider1.jpg'
import slideImg2 from '../../../assets/img/slider/sldier2.jpg'


function HeroSection() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings} className="overflow-hidden container max-w-[1340px]">
            <div className="relative">
                <picture className="focus:outline-none">
                    <img src={slideImg1} alt="" />
                </picture>
                <div className="z-10 max-[700px]:hidden w-[400px] max-[982px]:w-[340px] min-[1200px]:w-[440px] p-6 invisible sm:visible absolute top-10 min-[1200px]:top-16 left-16 bg-[#fff] shadow-lg">
                    <h2 className="text-[#2d2f31] text-3xl font-bold mb-2 font-SusseWorks">Last day to save</h2>
                    <p className="text-[#2d3f52] max-[982px]:text-sm">
                        Courses designed to help you reach your goals for less. Log in now to save on courses.
                    </p>
                </div>
            </div>
            <div className="relative">
                <picture className="focus:outline-none">
                    <img src={slideImg2} alt="" />
                </picture>
                <div className="z-10 max-[700px]:hidden w-[400px] max-[982px]:w-[340px] min-[1200px]:w-[440px] p-4 invisible sm:visible absolute top-3 min-[982px]:top-10 min-[1200px]:top-16 left-16 bg-[#fff] shadow-lg">
                    <h2 className="text-[#2d2f31] text-3xl font-bold mb-2 font-SusseWorks max-[982px]:text-[20px] sm:line-clamp-1 lg:line-clamp-none">
                        Unlock the power of your people
                    </h2>
                    <p className="text-[#2d3f52] max-[982px]:text-sm">
                        Udemy Business is trusted by 12.5K+ companies around the world. Find out what we can do for yours.
                    </p>
                    <button className="bg-[#202020] hover:bg-[#000000] transition duration-200 text-[white] mt-4 p-3">Request a demo</button>
                </div>
            </div>
        </Slider>
    );
}

export default HeroSection;
