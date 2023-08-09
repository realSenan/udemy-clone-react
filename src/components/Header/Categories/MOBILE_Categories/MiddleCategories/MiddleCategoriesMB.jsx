import { nanoid } from "nanoid";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";

function MiddleCategoriesMB({ filter, setOpenPop, openPop, mbPopUp }) {
    filter.map((item) => item.map((itms) => <li>{itms}</li>));

    return (
        <div
            className={`bg-[#fff] h-full w-[280px] absolute top-0 transition-all ease-in-out text-lg ${
                openPop ? "left-0" : "left-[280px]"
            } text-[#2d2f31]`}
        >
            <header className="bg-[#f7f9fa] p-4 flex items-center gap-5  py-2 px-4">
                <FiChevronLeft onClick={() => setOpenPop(false)} />
                <h2>Menu</h2>
            </header>
            <main>
                <ul>
                    <li className="py-2 px-4">{mbPopUp}</li>
                    {filter.map((item) =>
                        item.map((itms) => (
                            <li key={nanoid()} className="py-2 px-4">
                                {itms}
                            </li>
                        ))
                    )}
                </ul>
            </main>
        </div>
    );
}

export default MiddleCategoriesMB;
