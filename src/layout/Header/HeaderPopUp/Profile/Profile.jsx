import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGlobe2 } from "react-icons/bs";

import { GoLinkExternal } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../../../redux/auth/authSlice";
import toast from "react-hot-toast";

const comingSoonItem = (label) => (
    <li className="flex items-center justify-between gap-3 text-disableColor" aria-disabled="true">
        <span>{label}</span>
        <span className="shrink-0 rounded-sm bg-gray-secondary px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-disableColor">
            Soon
        </span>
    </li>
);

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [imageFailed, setImageFailed] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const user = useSelector((state) => state.auth.user);

    const logOut = () => {
        setIsOpen(false);
        localStorage.removeItem("user");
        dispatch(logOutUser());
        navigate("/");
        toast.success("Log out succesfly");
    };

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const profile = user?.photoURL || "";
    const displayName = user?.displayName || user?.email?.split("@")[0] || "Learner";
    const initials = displayName
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0].toUpperCase())
        .join("");

    useEffect(() => {
        setImageFailed(false);
    }, [profile]);

    const renderAvatar = (className) =>
        !profile || imageFailed ? (
            <span
                className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[#e8e4f5] font-bold text-[#5b3ca6] ${className}`}
                aria-label={`${displayName} initials`}
            >
                {initials}
            </span>
        ) : (
            <img
                src={profile}
                alt={`${displayName} profile`}
                onError={() => setImageFailed(true)}
                className={`shrink-0 rounded-full object-cover ${className}`}
            />
        );

    return (
        <div
            className="relative"
            onMouseEnter={() => {
                if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                    setIsOpen(true);
                }
            }}
            onMouseLeave={() => {
                if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                    setIsOpen(false);
                }
            }}
        >
            <button
                type="button"
                aria-label="Open profile menu"
                aria-expanded={isOpen}
                onClick={() => {
                    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                        setIsOpen(true);
                    } else {
                        setIsOpen((open) => !open);
                    }
                }}
                className="block rounded-full"
            >
                {renderAvatar("h-8 w-8 border cursor-pointer text-xs")}
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-[60] bg-black/20 md:hidden"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />
                    <div className="fixed right-2 top-[72px] z-[70] max-h-[calc(100dvh-80px)] w-[min(18rem,calc(100vw-1rem))] overflow-y-auto shadow-xl md:absolute md:right-0 md:top-auto md:max-h-none md:w-auto md:overflow-visible md:pt-6 md:shadow-none">
                    <div className="w-full rounded-sm bg-white shadow-xl md:w-[18rem]">
                        <div className="flex items-center gap-3 p-4 border-b border-border">
                            {renderAvatar("h-16 w-16 border !border-mainTextClr text-lg")}
                            <div className="">
                                <h3 className="font-bold text-lg line-clamp-1">
                                    {displayName}
                                </h3>
                                <p className="text-xs text-disableColor">
                                    {user?.email}
                                </p>
                            </div>
                        </div>

                        <ul className="text-[#2d2f31]  flex flex-col text-sm  gap-3 p-4  border-b border-border">
                            <li className="hover:text-activeClr">
                                <Link to={"my-courses/allCourses"} onClick={() => setIsOpen(false)}>My learning</Link>
                            </li>
                            <li className="hover:text-activeClr">
                                <Link to={"/cart-shop"} onClick={() => setIsOpen(false)}>My cart</Link>
                            </li>
                            <li className="hover:text-activeClr">
                                <Link to={"my-courses/wishlist"} onClick={() => setIsOpen(false)}>Wishlist</Link>
                            </li>
                            {comingSoonItem("Instructor dashboard")}
                        </ul>

                        <ul className="text-[#2d2f31]  flex flex-col gap-3 p-4 text-sm border-b border-border">
                            {comingSoonItem("Notifications")}
                            {comingSoonItem("Messages")}
                        </ul>

                        <ul className="text-[#2d2f31]  flex flex-col gap-3 p-4 text-sm border-b border-border">
                            {comingSoonItem("Account settings")}
                            {comingSoonItem("Payment methods")}
                            {comingSoonItem("Subscriptions")}
                            {comingSoonItem("Udemy credits")}
                            {comingSoonItem("Purchase history")}
                        </ul>

                        <div className="flex cursor-not-allowed items-center justify-between gap-3 border-b border-border p-4 text-sm text-disableColor opacity-55" aria-disabled="true">
                            <span>Language</span>
                            <div className="flex items-center gap-2">
                                English <BsGlobe2 />
                                <span className="rounded-sm bg-gray-secondary px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-disableColor">
                                    Soon
                                </span>
                            </div>
                        </div>

                        <ul className="text-[#2d2f31]  flex flex-col gap-3 p-4 text-sm border-b border-border">
                            {comingSoonItem("Public profile")}
                            {comingSoonItem("Edit Profile")}
                        </ul>

                        <ul className="text-[#2d2f31]  flex flex-col gap-3 p-4 text-sm border-b border-border">
                            {comingSoonItem("Help")}
                            <li className="hover:text-activeClr cursor-pointer" onClick={logOut}>
                                Log out
                            </li>
                        </ul>

                        <div className="border-t border-border p-4">
                            <div className="flex items-center justify-between gap-2">
                                <h3 className="text-lg text-liColor font-bold">Udemy Buisness</h3>
                                <GoLinkExternal size={20} />
                            </div>
                            <div className="mt-1 flex items-center justify-between gap-2 text-sm text-disableColor">
                                <span>Bring learning to your company</span>
                                <span className="shrink-0 rounded-sm bg-gray-secondary px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide">
                                    Soon
                                </span>
                            </div>
                        </div>
                    </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Profile;
