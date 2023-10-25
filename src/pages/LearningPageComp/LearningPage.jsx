import { NavLink, Outlet } from "react-router-dom";

const LearningPage = () => {
    return (
        <>
            <div className="bg-liColor">
                <div className="container max-w-[1040px] pt-8 pb-3.5">
                    <h1 className="text-4xl font-bold text-white font-SusseWorks mt-4">
                        My learning
                    </h1>

                    <ul className="flex items-center gap-5 mt-10 font-bold customUl text-[#d1d7dc]">
                        <li>
                            <NavLink to="allCourses" className={"pb-2"}>
                                All courses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="myList" className={"pb-2"}>
                                My list
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="wishlist" className={"pb-2"}>
                                Wishlist
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="archived" className={"pb-2"}>
                                Archived
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="learningTools" className={"pb-2"}>
                                Learning tools
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container max-w-[1040px] py-8  ">
                <Outlet />
            </div>
        </>
    );
};

export default LearningPage;
