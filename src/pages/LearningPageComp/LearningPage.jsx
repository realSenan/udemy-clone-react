import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";

const LearningPage = () => {
  const tabsRef = useRef(null);
  const [canScrollTabs, setCanScrollTabs] = useState(false);

  useEffect(() => {
    const tabs = tabsRef.current;
    if (!tabs) return undefined;

    const updateScrollHint = () => {
      setCanScrollTabs(tabs.scrollLeft + tabs.clientWidth < tabs.scrollWidth - 2);
    };

    updateScrollHint();
    tabs.addEventListener("scroll", updateScrollHint, { passive: true });
    window.addEventListener("resize", updateScrollHint);

    return () => {
      tabs.removeEventListener("scroll", updateScrollHint);
      window.removeEventListener("resize", updateScrollHint);
    };
  }, []);

  return (
    <>
      <div className="bg-liColor px-4">
        <div className="container max-w-[1040px] pt-8 pb-3.5">
          <h1 className="text-4xl font-bold text-white font-SusseWorks mt-4">
            My learning
          </h1>

          <div className="relative -mx-4 sm:mx-0">
            <ul
              ref={tabsRef}
              className="mt-8 flex max-w-full items-center gap-6 overflow-x-auto overscroll-x-contain px-4 pb-3 font-bold customUl text-[#d1d7dc] whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-10 sm:gap-5"
            >
              <li className="shrink-0">
                <NavLink to="allCourses" className={"pb-2"}>
                  All courses
                </NavLink>
              </li>
              <li className="shrink-0">
                <NavLink to="myList" className={"pb-2"}>
                  My list
                </NavLink>
              </li>
              <li className="shrink-0">
                <NavLink to="wishlist" className={"pb-2"}>
                  Wishlist *
                </NavLink>
              </li>
              <li className="shrink-0">
                <NavLink to="archived" className={"pb-2"}>
                  Archived
                </NavLink>
              </li>
              <li className="shrink-0">
                <NavLink to="learningTools" className={"pb-2"}>
                  Learning tools *
                </NavLink>
              </li>
            </ul>
            {canScrollTabs && (
              <button
                type="button"
                aria-label="Swipe to see more learning tabs"
                onClick={() => tabsRef.current?.scrollBy({ left: 140, behavior: "smooth" })}
                className="absolute right-0 top-8 flex items-center gap-1 rounded-l-full bg-liColor/95 py-1.5 pl-3 pr-2 text-xs font-semibold text-white shadow-md sm:hidden"
              >
                Swipe <IoIosArrowForward size={15} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container max-w-[1040px] py-8  px-4">
        <Outlet />
      </div>
    </>
  );
};

export default LearningPage;
