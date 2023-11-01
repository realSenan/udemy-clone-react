import { BsExclamationDiamondFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { ImEqualizer2 } from "react-icons/im";
import Filter from "../../components/Filter";
import { useLocation } from "react-router-dom";
import SearchCart from "../../components/SearchCart";
import { useState } from "react";
import { nanoid } from "nanoid";

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
    const MainData = useSelector((state) => state.data.product);
    const mFilter = useSelector((state) => state.filter.filter);
    const [clearFilterStatus, setClearFilterStatus] = useState(false);

    const clearFilter = (e) => {
        setClearFilterStatus(!clearFilterStatus);
    };

    const newData = MainData.filter((mProduct) => mProduct.rating <= mFilter);
    console.log(mFilter);

    return (
        <div className="container  max-w-[1340px] mt-10 px-5 mb-10">
            <h1 className="font-bold text-2xl ">
                All {location.search.replace("%20", " ").slice(1)} courses
            </h1>

            <div className="border border-border py-4 px-5 mt-4">
                <span className="font-bold text-liColor flex items-center  gap-2">
                    <BsExclamationDiamondFill size={30} /> Not sure? All courses have a 30-day
                    money-back guarantee
                </span>
            </div>

            <div className="mt-6 flex gap-2 items-center">
                <div className="flex items-center justify-center w-[5.5rem] h-[3.75rem] border gap-2 font-bold cursor-pointer hover:bg-[#e3e7ea]">
                    <ImEqualizer2 /> Filter
                </div>
                <div className="w-[11.125rem] h-[3.75rem] border ps-3 pt-2 text-liColor cursor-pointer hover:bg-[#e3e7ea]">
                    <label htmlFor="tse1" className="text-xs block font-bold cursor-pointer">
                        Sort by
                    </label>

                    <select
                        id="tse1"
                        className="outline-none w-[90%] bg-[transparent] cursor-pointer"
                    >
                        <option>Most Popular</option>
                        <option>Highest Rated</option>
                        <option>Newest</option>
                    </select>
                </div>

                <span className="font-bold cursor-pointer" onClick={clearFilter}>
                    Clear filters
                </span>
            </div>

            <div className="flex gap-x-12 justify-between mt-5">
                <div className="">
                    <div className="sticky h-screen overflow-y-auto top-0 w-[14.5rem] bg-white min-w-max">
                        <Filter
                            type={"radio"}
                            arr={ratingsArr}
                            name={"Ratings"}
                            hText={"Ratings"}
                            clear={clearFilterStatus}
                        />
                        <Filter
                            type={"checkbox"}
                            arr={videoHours}
                            name={"Video"}
                            hText={"Video Duration"}
                            clear={clearFilterStatus}
                        />
                        <Filter
                            type={"checkbox"}
                            arr={topic}
                            name={"Topic"}
                            hText={"Topic"}
                            clear={clearFilterStatus}
                        />
                        <Filter
                            type={"checkbox"}
                            arr={SubCategory}
                            name={"Subcategory"}
                            hText={"Subcategory"}
                            clear={clearFilterStatus}
                        />
                        <Filter
                            type={"checkbox"}
                            arr={Level}
                            name={"Level"}
                            hText={"Level"}
                            clear={clearFilterStatus}
                        />
                        <Filter
                            type={"checkbox"}
                            arr={Languages}
                            name={"Language"}
                            hText={"Language"}
                            clear={clearFilterStatus}
                        />
                        <Filter
                            type={"checkbox"}
                            arr={Price}
                            name={"Price"}
                            hText={"Price"}
                            clear={clearFilterStatus}
                        />
                        <Filter
                            type={"checkbox"}
                            arr={Features}
                            name={"Features"}
                            hText={"Features"}
                            clear={clearFilterStatus}
                        />
                        <Filter
                            type={"checkbox"}
                            arr={Languages}
                            name={"Subtitles"}
                            hText={"Subtitles"}
                            clear={clearFilterStatus}
                        />
                    </div>
                </div>

                <div className="w-full">
                    {newData?.map((item) => (
                        <SearchCart key={nanoid()} product={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchP;
