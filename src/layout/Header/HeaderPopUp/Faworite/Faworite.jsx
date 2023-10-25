import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Faworite = () => {
    const [mouseEnter, setMouseEnter] = useState(false);
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
            className="relative hover:text-activeClr"
        >
            <div className="cursor-pointer ">
                <Link to={"/my-courses/wishlist"}>
                    <AiOutlineHeart size={24} />
                </Link>
            </div>

            {mouseEnter && (
                <div className="absolute  right-0 pt-7 ">
                    <div className="bg-white shadow-lg PopDown w-[18.75rem] min-h-[6rem] flex items-center justify-center flex-col">
                        <div className="text-disableColor ">Your wishlist is empty.</div>
                        <div className="font-bold text-activeClr mt-3">Explore courses</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Faworite;
