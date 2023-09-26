import Comments from "../../../../components/Comment";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { nanoid } from "nanoid";

const CommentSection = () => {
    const commentData = [
        {
            name: "Will A",
            pp: "WA",
            text1: "I am proud to say that after a few months of taking this course...",
            darkText: ".I passed my exam and am now an AWS Certified Cloud Practitioner!",
            text2: "This content was exactly what the CCP exam covered.",
            video: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2022",
        },
        {
            name: "Ron F",
            pp: "RF",
            text1: "This course helped me",
            darkText: "reshen up on my product manager skills and land a job at Facebook!",
            text2: "Thanks guys :)",
            video: "Become a Product Manager | Learn the Skills & Get the Job",
        },
        {
            name: "Philp W",
            pp: "PW",
            text1: "One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. ",
            darkText: "Would help anyone become a better manager.",
            text2: "",
            video: "Leadership: Practical Leadership Skills",
        },
        {
            name: "Surya M",
            pp: "SM",
            text1: "I highly ",
            darkText: "recommend this course for all budding data scientists.",
            text2: "Even people with no prior knowledge of any visualization tools can become a master after completing this course.",
            video: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2022",
        },
        {
            name: "Will A",
            pp: "WA",
            text1: "I am proud to say that after a few months of taking this course...",
            darkText: ".I passed my exam and am now an AWS Certified Cloud Practitioner!",
            text2: "This content was exactly what the CCP exam covered.",
            video: "Tableau 2022 A-Z: Hands-On Tableau Training for Data Science",
        },
    ];

    return (
        <div className="bg-[#f7f9fa]">
            <div className="container max-w-[1340px] py-8 md:py-16 mt-20 px-5">
                <h2 className="text-2xl font-bold text-liColor">
                    How learners like you are achieving their goals
                </h2>

                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={10}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled",
                    }}
                    modules={[Navigation]}
                    className="!items-stretch "
                >
                    {commentData.map((data) => (
                        <SwiperSlide key={nanoid()} className="w-fit h-auto">
                            <Comments data={data} />
                        </SwiperSlide>
                    ))}

                    <button className="image-swiper-button-next absolute right-0 top-[45%] z-10 w-12 h-12 bg-[#393c3ee8] hover:bg-[#393c3ef3] rounded-full flex items-center justify-center cursor-pointer">
                        <IoIosArrowForward size={28} color="#fff" />
                    </button>
                    <button className="image-swiper-button-prev absolute left-0 top-[45%] z-10 w-12 h-12 bg-[#393c3ee8] hover:bg-[#393c3ef3] rounded-full flex items-center justify-center cursor-pointer">
                        <IoIosArrowBack size={28} color="#fff" />
                    </button>
                </Swiper>
            </div>
        </div>
    );
};

export default CommentSection;
