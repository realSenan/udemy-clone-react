import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyLearning = () => {
    const [mouseEnter, setMouseEnter] = useState(false);
    const shopItems = useSelector((state) => state.shop.shopData);

    const mouseHandler = (e) => {
        setMouseEnter(true);
    };

    const LeaveMouseHandler = (e) => {
        setMouseEnter(false);
    };
    return (
        <div
            onMouseEnter={mouseHandler}
            onMouseLeave={LeaveMouseHandler}
            className="text-sm tracking-tight hover:text-activeClr cursor-pointer hidden md:block relative"
        >
            <Link to={"/my-courses/allCourses"}>My learning</Link>
            {mouseEnter && (
                <div className={`absolute right-0 pt-7 PopDown cursor-default`}>
                    <div
                        className={`bg-white w-[18.75rem] min-h-[6rem] ${
                            shopItems.length ? "px-0 pe-1 pb-0" : " p-4"
                        }  flex flex-col justify-center shadow-md`}
                    >
                        <>
                            <h3 className="text-mainTextClr text-[1rem] text-center  ">
                                There is no ongoing video.
                            </h3>
                            <Link
                                className="flex items-center justify-center
                            text-activeClr font-bold mt-3 "
                            >
                                Keep Shoopping
                            </Link>
                        </>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyLearning;
