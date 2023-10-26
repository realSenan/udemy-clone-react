import { auth } from "../../../../../firebase";
import noImg from "/src/assets/img/no-user-image.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsGlobe2 } from "react-icons/bs";

import { GoLinkExternal } from "react-icons/go";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../../../redux/auth/authSlice";
import toast from "react-hot-toast";

const Profile = () => {
    const [mouseEnter, setMouseEnter] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = (e) => {
        localStorage.removeItem("user");
        dispatch(logOutUser());
        navigate("/");
        toast.success("Log out succesfly");
    };

    const mouseHandler = (e) => {
        setMouseEnter(true);
    };

    const LeaveMouseHandler = (e) => {
        setMouseEnter(false);
    };

    const user = JSON.parse(localStorage.getItem("user"));

    const [profile, setProfile] = useState(
        user?._tokenResponse?.photoUrl === undefined || user?._tokenResponse?.photoUrl === null
            ? noImg
            : user?._tokenResponse?.photoUrl,
    );

    return (
        <div className="relative" onMouseEnter={mouseHandler} onMouseLeave={LeaveMouseHandler}>
            <img
                src={`${profile}`}
                className="w-8 h-8 rounded-full border overflow-hidden cursor-pointer"
            />

            {mouseEnter && (
                <div className=" absolute right-0 z-10 pt-6 PopDown shadow-xl">
                    <div className="w-[17.5rem]  bg-white">
                        <Link className="flex items-center gap-3 p-4 border-b border-border hover:text-activeClr">
                            <img
                                src={profile}
                                alt=""
                                className="w-16 h-w-16 rounded-full border !border-mainTextClr overflow-hidden"
                            />
                            <div className="">
                                <h3 className="font-bold text-lg line-clamp-1">
                                    {user?.user?.displayName}
                                </h3>
                                <p className="text-xs text-disableColor">
                                    {user?._tokenResponse?.email}
                                </p>
                            </div>
                        </Link>

                        <ul className="text-[#2d2f31]  flex flex-col text-sm  gap-3 p-4  border-b border-border">
                            <li className="hover:text-activeClr">
                                <Link to={"my-courses/allCourses"}>My learning</Link>
                            </li>
                            <li className="hover:text-activeClr">
                                <Link to={"/cart-shop"}>My cart</Link>
                            </li>
                            <li className="hover:text-activeClr">
                                <Link to={"my-courses/wishlist"}>Wishlist</Link>
                            </li>
                            <li className="hover:text-activeClr">
                                <Link>Instructor dashboard</Link>
                            </li>
                        </ul>

                        <ul className="text-[#2d2f31]  flex flex-col gap-3 p-4 text-sm border-b border-border">
                            <li className="hover:text-activeClr">
                                <Link>Notifications</Link>
                            </li>
                            <li className="hover:text-activeClr">
                                <Link>Messages</Link>
                            </li>
                        </ul>

                        <ul className="text-[#2d2f31]  flex flex-col gap-3 p-4 text-sm border-b border-border">
                            <li className="hover:text-activeClr">
                                <Link>Account settings</Link>
                            </li>
                            <li className="hover:text-activeClr">
                                <Link>Payment methods</Link>
                            </li>
                            <li className="hover:text-activeClr">
                                <Link>Subscriptions</Link>
                            </li>
                            <li className="hover:text-activeClr">
                                <Link>Udemy credits</Link>
                            </li>
                            <li className="hover:text-activeClr">
                                <Link>Purchase history</Link>
                            </li>
                        </ul>

                        <div className="text-[#2d2f31]  flex justify-between items-center gap-3 p-4 text-sm border-b border-border">
                            <span>Language</span>
                            <div className="flex items-center gap-2">
                                English <BsGlobe2 />{" "}
                            </div>
                        </div>

                        <ul className="text-[#2d2f31]  flex flex-col gap-3 p-4 text-sm border-b border-border">
                            <li className="hover:text-activeClr">
                                <Link>Public profile</Link>
                            </li>
                            <li className="hover:text-activeClr">
                                <Link>Edit Profile</Link>
                            </li>
                        </ul>

                        <ul className="text-[#2d2f31]  flex flex-col gap-3 p-4 text-sm border-b border-border">
                            <li className="hover:text-activeClr">
                                <Link>Help</Link>
                            </li>
                            <li className="hover:text-activeClr cursor-pointer" onClick={logOut}>
                                Log out
                            </li>
                        </ul>

                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg text-liColor font-bold">Udemy Buisness</h3>
                                <GoLinkExternal size={20} />
                            </div>
                            <div className="text-sm text-disableColor">
                                Bring learning to your company
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
