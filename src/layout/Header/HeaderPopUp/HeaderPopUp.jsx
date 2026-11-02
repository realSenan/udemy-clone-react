import PopUp from "./PopUp/PopUp";
import { AiOutlineSearch } from "react-icons/ai";
import ShopCart from "./ShopCart/ShopCart";
import { useSelector } from "react-redux";
import Faworite from "./Faworite/Faworite";
import RingTone from "./RingTone/RingTone";
import Profile from "./Profile/Profile";
import MyLearning from "./myLearning/MyLearning";
import { Link, useLocation, useNavigate } from "react-router-dom";

function HeaderPopUp({ GiShoppingCart }) {
    const isLogin = useSelector((state) => state.auth.isLogin);
    const navigate = useNavigate();
    const location = useLocation();

    const focusHomeSearch = () => {
        if (location.pathname !== "/") {
            navigate("/", { state: { focusHomeSearch: true } });
            return;
        }

        const searchInput = document.getElementById("home-search-input");
        searchInput?.scrollIntoView({ behavior: "smooth", block: "center" });
        window.setTimeout(() => searchInput?.focus({ preventScroll: true }), 250);
    };

    return (
        <div className="flex gap-4  md:gap-6 items-center text-[15px] min-w-max ">
            <button type="button" onClick={focusHomeSearch} aria-label="Search courses" className="block rounded-full p-1 hover:bg-gray-secondary md:hidden">
                <AiOutlineSearch size={24} />
            </button>
            <PopUp
                text={"Udmey Buisness"}
                className=" hidden xl:block "
                text2={"Get your team access to over 22,000 top Udemy courses, anytime, anywhere."}
                text3={"Try Udemy Buisness"}
                GiShoppingCart={GiShoppingCart}
            />
            {isLogin ? (
                <>
                    <div className="text-sm tracking-tight hover:text-activeClr cursor-pointer hidden lg:block">
                        Instructor
                    </div>
                    <MyLearning />

                    <div className="hidden os:block">
                        <Faworite />
                    </div>
                </>
            ) : (
                <PopUp
                    text={"Tech on Udemy"}
                    className="hidden lg:block"
                    text2={
                        "Turn what you know into an opportunity and reach millions around the world."
                    }
                    text3={"Learn More"}
                    GiShoppingCart={GiShoppingCart}
                />
            )}

            <ShopCart GiShoppingCart={GiShoppingCart} />

            {isLogin && (
                <>
                    <div className="hidden os:block">
                        <RingTone />
                    </div>
                    <div className="md:block hidden">
                        <Profile />
                    </div>
                    <div className="md:hidden">
                        <Profile />
                    </div>
                </>
            )}
            {!isLogin && (
                <Link
                    to="/login"
                    className="whitespace-nowrap text-xs font-bold text-activeClr hover:underline md:hidden"
                >
                    Log in
                </Link>
            )}
        </div>
    );
}

export default HeaderPopUp;
