import { BsExclamationDiamondFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { ImEqualizer2 } from "react-icons/im";
import Filter from "../../components/Filter";
import { useLocation, useNavigate } from "react-router-dom";
import SearchCart from "../../components/SearchCart";
import { useState } from "react";
import { nanoid } from "nanoid";
import { FiCheck, FiChevronDown, FiSearch } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Cards from "../../components/Cards";
import { findFilter } from "../../redux/filterSlice";
import { changeValue } from "../../redux/searchSlice";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const SearchP = () => {
    const ratingsArr = [
        {
            img: ["fullStar", "fullStar", "fullStar", "fullStar", "halfStar"],
            text: "4.5 & up",
            info: "(4,674)",
        },
        {
            img: ["fullStar", "fullStar", "fullStar", "fullStar", ""],
            text: "4.0 & up",
            info: "(8,004)",
        },
        {
            img: ["fullStar", "fullStar", "fullStar", "halfStar", ""],
            text: "3.5 & up",
            info: "(9,680)",
        },
        { img: ["fullStar", "fullStar", "fullStar", "", ""], text: "3.0 & up", info: "(1000)" },
    ];

    const videoHours = [
        {
            text: "0 - 1 Hour",
            info: "(216)",
        },
        {
            text: "1 - 3 Hours",
            info: "(996)",
        },
        {
            text: "3 - 6 Hours",
            info: "(832)",
        },
        {
            text: "6 - 17 Hours",
            info: "(1327)",
        },
        {
            text: "17+ Hours",
            info: "(727)",
        },
    ];

    const topic = [
        {
            text: "Web development",
            info: "(305)",
        },
        {
            text: "Java Script",
            info: "(299)",
        },
        {
            text: "React Js",
            info: "(220)",
        },
        {
            text: "WordPress",
            info: "(209)",
        },
        {
            text: "PHP",
            info: "(200)",
        },
        {
            text: "CSS",
            info: "(154)",
        },
        {
            text: "Laravel",
            info: "(145)",
        },
        {
            text: "HTML",
            info: "(142)",
        },
        {
            text: "Angular",
            info: "(139)",
        },
        {
            text: "Django",
            info: "(133)",
        },
        {
            text: "HTML5",
            info: "(112)",
        },
        {
            text: "Node.Js",
            info: "(99)",
        },
        {
            text: "Vue JS",
            info: "(93)",
        },
        {
            text: "ASP.NET Core",
            info: "(93)",
        },
        {
            text: "Front End Web Development",
            info: "(95)",
        },
        {
            text: "Bootstrap",
            info: "(92)",
        },
        {
            text: "Full Stack Web Developer",
            info: "(70)",
        },
        {
            text: "REST API",
            info: "(46)",
        },
        {
            text: "Next.js",
            info: "(46)",
        },
        {
            text: "Spring Boot",
            info: "(46)",
        },
        {
            text: "Web Design",
            info: "(42)",
        },
        {
            text: "Python",
            info: "(41)",
        },
        {
            text: "Typescript",
            info: "(40)",
        },
        {
            text: "Mern Stack",
            info: "(38)",
        },
        {
            text: "ASP.NET",
            info: "(37)",
        },
    ];

    const SubCategory = [
        {
            text: "Web development",
            info: "(4,603)",
        },
    ];

    const Level = [
        {
            text: "All Levels",
            info: "(1,081)",
        },
        {
            text: "Beginner",
            info: "(1,501)",
        },
        {
            text: "Intermediate",
            info: "(667)",
        },
        {
            text: "Expert",
            info: "(43)",
        },
    ];

    const Languages = [
        { text: "Afganistan", info: `(${Math.floor(Math.random() * 1509)})` },
        { text: "Almanya", info: `(${Math.floor(Math.random() * 1509)})` },
        { text: "Amerika Birleşik Devletleri", info: `(${Math.floor(Math.random() * 1509)})` },
        { text: "Arjantin", info: `(${Math.floor(Math.random() * 1509)})` },
        { text: "Avustralya", info: `(${Math.floor(Math.random() * 1509)})` },
        { text: "Brezilya", info: `(${Math.floor(Math.random() * 1509)})` },
        { text: "Çin", info: `(${Math.floor(Math.random() * 1509)})` },
        { text: "Fransa", info: `(${Math.floor(Math.random() * 1509)})` },
        { text: "Hindistan", info: `(${Math.floor(Math.random() * 1509)})` },
        { text: "İngiltere", info: `(${Math.floor(Math.random() * 1509)})` },
        { text: "Japonya", info: `(${Math.floor(Math.random() * 1509)})` },
        { text: "Kanada", info: `(${Math.floor(Math.random() * 1509)})` },
        { text: "Meksika", info: `(${Math.floor(Math.random() * 1509)})` },
        { text: "Rusya", info: `(${Math.floor(Math.random() * 1509)})` },
        { text: "Türkiye", info: `(${Math.floor(Math.random() * 1509)})` },
    ];

    const Price = [
        {
            text: "Paid",
            info: `(${Math.floor(Math.random() * 1509)})`,
        },
        {
            text: "Free",
            info: `(${Math.floor(Math.random() * 1509)})`,
        },
    ];

    const Features = [
        {
            text: "Subtitles",
            info: `(${Math.floor(Math.random() * 1509)})`,
        },
        {
            text: "Quizzes",
            info: `(${Math.floor(Math.random() * 1509)})`,
        },
        {
            text: "Coding Exercises",
            info: `(${Math.floor(Math.random() * 1509)})`,
        },
        {
            text: "Practice Tests",
            info: `(${Math.floor(Math.random() * 1509)})`,
        },
    ];

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const userSearchContent = location.search.replace(/%20/g, " ").slice(1);
    const MainData = useSelector((state) => state.data.product);
    const mFilter = useSelector((state) => state.filter.filter);
    const [clearFilterVersion, setClearFilterVersion] = useState(0);
    const [sortBy, setSortBy] = useState("Most Popular");
    const [sortOpen, setSortOpen] = useState(false);

    const clearFilter = () => {
        setClearFilterVersion((version) => version + 1);
        setSortBy("Most Popular");
        setSortOpen(false);
        dispatch(findFilter(5));
        dispatch(changeValue(""));
        navigate("/search", { replace: true });
    };

    const searchContent = useSelector((state) => state.search.value);

    const searchTerm = (searchContent || userSearchContent).trim();
    const newData = MainData.filter((mProduct) => {
        return (
            mProduct.rating <= mFilter &&
            mProduct["headTexts:"]
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
    });

    const sortedData = [...newData].sort((firstCourse, secondCourse) => {
        if (sortBy === "Highest Rated") return Number(secondCourse.rating) - Number(firstCourse.rating);
        if (sortBy === "Price: Low to High") return Number(firstCourse.price) - Number(secondCourse.price);
        if (sortBy === "Price: High to Low") return Number(secondCourse.price) - Number(firstCourse.price);
        return Number(secondCourse.bestseller) - Number(firstCourse.bestseller);
    });

    const [filterSlide, setFilterSlide] = useState(true);

    return (
        <div className="container max-w-[1340px] mt-8 px-5 pb-8 overflow-x-hidden">
            <h1 className="font-bold text-2xl ">
                {searchTerm ? `Results for “${searchTerm}”` : "All courses"}
            </h1>

            <div className="border border-border py-4 px-5 mt-4">
                <span className="font-bold text-liColor flex items-center  gap-2">
                    <BsExclamationDiamondFill size={30} /> Not sure? All courses have a 30-day
                    money-back guarantee
                </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
                <button
                    type="button"
                    onClick={() => setFilterSlide(!filterSlide)}
                    aria-expanded={!filterSlide}
                    className="flex items-center justify-center min-w-[5.5rem] h-[3.5rem] border border-liColor gap-2 font-bold hover:bg-gray-secondary transition-colors"
                >
                    <ImEqualizer2 /> Filter
                </button>
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setSortOpen(!sortOpen)}
                        aria-haspopup="listbox"
                        aria-expanded={sortOpen}
                        className="w-[13.5rem] h-[3.5rem] border border-liColor px-3 text-liColor text-left hover:bg-gray-secondary transition-colors"
                    >
                        <span className="text-xs block font-bold text-disableColor">Sort by</span>
                        <span className="flex items-center justify-between font-bold">
                            {sortBy} <FiChevronDown className={sortOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                        </span>
                    </button>
                    {sortOpen && (
                        <ul
                            role="listbox"
                            className="ui-popover absolute z-30 top-[3.75rem] left-0 w-[15.5rem] bg-white border border-border shadow-dropDownBox py-1"
                        >
                            {["Most Popular", "Highest Rated", "Price: Low to High", "Price: High to Low"].map(
                                (option) => (
                                    <li key={option}>
                                        <button
                                            type="button"
                                            role="option"
                                            aria-selected={sortBy === option}
                                            onClick={() => {
                                                setSortBy(option);
                                                setSortOpen(false);
                                            }}
                                            className="w-full px-3 py-3 flex items-center justify-between text-left hover:bg-gray-secondary"
                                        >
                                            {option}
                                            {sortBy === option && <FiCheck className="text-activeClr" />}
                                        </button>
                                    </li>
                                ),
                            )}
                        </ul>
                    )}
                </div>

                <button type="button" className="font-bold text-activeClr hover:underline" onClick={clearFilter}>
                    Clear filters
                </button>
            </div>

            <div
                className={`flex ${
                    filterSlide ? "gap-x-0" : "gap-x-6"
                } transition-all duration-300 justify-between mt-5 relative`}
            >
                <div
                    className={`${
                        filterSlide ? "w-0" : "w-[20.5rem]"
                    } transition-all duration-300 overflow-x-hidden`}
                >
                    <div className="sticky  top-0 w-[14.5rem] bg-white min-w-max">
                        <Filter
                            type={"radio"}
                            arr={ratingsArr}
                            name={"Ratings"}
                            hText={"Ratings"}
                            clearVersion={clearFilterVersion}
                        />
                        <Filter
                            type={"checkbox"}
                            arr={videoHours}
                            name={"Video"}
                            hText={"Video Duration"}
                            clearVersion={clearFilterVersion}
                        />
                        <Filter
                            type={"checkbox"}
                            arr={topic}
                            name={"Topic"}
                            hText={"Topic"}
                            clearVersion={clearFilterVersion}
                        />
                        <Filter
                            type={"checkbox"}
                            arr={SubCategory}
                            name={"Subcategory"}
                            hText={"Subcategory"}
                            clearVersion={clearFilterVersion}
                        />
                        <Filter
                            type={"checkbox"}
                            arr={Level}
                            name={"Level"}
                            hText={"Level"}
                            clearVersion={clearFilterVersion}
                        />
                        <Filter
                            type={"checkbox"}
                            arr={Languages}
                            name={"Language"}
                            hText={"Language"}
                            clearVersion={clearFilterVersion}
                        />
                        <Filter
                            type={"checkbox"}
                            arr={Price}
                            name={"Price"}
                            hText={"Price"}
                            clearVersion={clearFilterVersion}
                        />
                        <Filter
                            type={"checkbox"}
                            arr={Features}
                            name={"Features"}
                            hText={"Features"}
                            clearVersion={clearFilterVersion}
                        />
                        <Filter
                            type={"checkbox"}
                            arr={Languages}
                            name={"Subtitles"}
                            hText={"Subtitles"}
                            clearVersion={clearFilterVersion}
                        />
                    </div>
                </div>

                <div className={`w-full  transition-all duration-300`}>
                    {sortedData.map((item) => (
                        <SearchCart key={nanoid()} product={item} />
                    ))}
                    {!sortedData.length && (
                        <section className="border border-border bg-gray-secondary px-5 py-8 sm:p-8">
                            <div className="flex items-start gap-4">
                                <span className="w-11 h-11 shrink-0 rounded-full bg-white border border-border flex items-center justify-center text-activeClr">
                                    <FiSearch size={21} />
                                </span>
                                <div>
                                    <h2 className="text-xl font-bold text-liColor">We couldn’t find any courses for “{searchTerm || "these filters"}”</h2>
                                    <p className="mt-2 text-disableColor">Try a different keyword, remove a filter, or explore one of our available courses below.</p>
                                    <button type="button" onClick={clearFilter} className="mt-4 font-bold text-activeClr hover:underline">
                                        Clear filters and try again
                                    </button>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h3 className="font-bold text-xl text-liColor">Popular courses you can start now</h3>
                                <Swiper
                                    slidesPerView="auto"
                                    spaceBetween={15}
                                    className="mt-5 !overflow-y-visible"
                                    navigation={{
                                        nextEl: ".popular-courses-next",
                                        prevEl: ".popular-courses-prev",
                                        disabledClass: "swiper-button-disabled",
                                    }}
                                    modules={[Navigation]}
                                >
                                    {MainData.map((course) => (
                                        <SwiperSlide key={course.id} className="!w-fit">
                                            <Cards product={course} />
                                        </SwiperSlide>
                                    ))}
                                    <button
                                        type="button"
                                        aria-label="Next popular courses"
                                        className="popular-courses-next absolute right-0 top-[20%] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#393c3ee8] hover:bg-[#393c3ef3]"
                                    >
                                        <IoIosArrowForward size={28} color="#fff" />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Previous popular courses"
                                        className="popular-courses-prev absolute left-0 top-[20%] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#393c3ee8] hover:bg-[#393c3ef3]"
                                    >
                                        <IoIosArrowBack size={28} color="#fff" />
                                    </button>
                                </Swiper>
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchP;
