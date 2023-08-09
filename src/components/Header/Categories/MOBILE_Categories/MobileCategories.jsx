import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import MainCategoriesMB from "./MainCategories/MainCategoriesMB";
import Login from "../../LoginSection/Login/Login";
import { BsGlobe } from "react-icons/bs";
import MiddleCategoriesMB from "./MiddleCategories/MiddleCategoriesMB";

function MobileCategories({ linkData, activeMbMenu, setActiveMbMenu }) {
    const [mbPopUp, setMbPopUp] = useState("");
    const [filter, setFilter] = useState([]);
    const [openPop, setOpenPop] = useState(false);

    useEffect(() => {
        const filter = linkData.filter((item) => {
            return item.Subcategories[mbPopUp.trim()];
        });
        const lastFilter = filter.map((item) => item.Subcategories[mbPopUp.trim()]);
        setFilter(lastFilter);
    }, [mbPopUp]);

    function checkClickBoard(e) {
        const target = e.target.parentElement.parentElement.tagName.toLowerCase();
        if (!(target == "menu" || target == "main" || target == "div")) {
            setActiveMbMenu(false);
        }
    }

    return (
        <div
            className={`block md:hidden fixed left-0 top-0 w-full  h-full bg-[#02050c85] transition-all  ${
                activeMbMenu ? "visible " : " invisible"
            }`}
            onClick={(e) => checkClickBoard(e)}
        >
            <menu
                className={`h-full w-[17.5rem] bg-[#fff] py-2  overflow-x-hidden relative transition-all ease-linear delay-600 csxmenu z-10 ${
                    activeMbMenu ? "left-0" : "-left-80"
                }`}
            >
                <div className="login text-activeClr text-lg py-2 px-4 cursor-pointer">Log in</div>
                <div className="SignUp text-activeClr text-lg py-2 px-4 cursor-pointer">Sign up</div>

                <h2 className="mt-2 border-t border-[#d1d7dc] py-2 px-4 font-bold text-[#6a6f73] ">Most popular</h2>

                <MainCategoriesMB linkData={linkData} setMbPopUp={setMbPopUp} setOpenPop={setOpenPop} openPop={openPop} />
                <MiddleCategoriesMB filter={filter} setOpenPop={setOpenPop} openPop={openPop} mbPopUp={mbPopUp} />

                <h2 className="mt-2 border-t border-[#d1d7dc] py-2 px-4 font-bold text-[#6a6f73] ">More from Udemy</h2>

                <ul className="mb-2">
                    <li className=" py-2 px-4 text-lg">
                        <div>Udemy Business</div>
                    </li>
                    <li className=" py-2 px-4 text-lg">
                        <div>Get the app</div>
                    </li>
                    <li className=" py-2 px-4 text-lg">
                        <div>Invite friends</div>
                    </li>
                    <li className=" py-2 px-4 text-lg">
                        <div>Help</div>
                    </li>
                </ul>
                <Login text={<BsGlobe size={20} />} tx2={"English"} pad={"ms-4"} w={"w-[140px] flex items-center font-normal text-lg"} />
            </menu>
            <div
                className="closeButton  z-10  fixed left-[310px] top-10 w-14 h-14 rounded-full bg-[#fff] flex items-center justify-center hover:bg-[#e0e0e0] cursor-pointer"
                onClick={() => setActiveMbMenu(false)}
            >
                <MdClose size={25} />
            </div>
        </div>
    );
}

export default MobileCategories;
