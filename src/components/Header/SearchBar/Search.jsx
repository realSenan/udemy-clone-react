import React from "react";
import {AiOutlineSearch} from "react-icons/ai";

function Search() {
    return (
        <>
            <div className="w-2/4  hidden md:flex items-center rounded-3xl border bg-gray-secondary">
                <AiOutlineSearch size={28} className="text-disableColor mx-3 hover:cursor-not-allowed" />
                <input
                    type="text"
                    name=""
                    id="search"
                    className="w-full h-12  rounded-3xl  outline-none bg-gray-secondary"
                    placeholder="Search for anyhing "
                />
            </div>
        </>
    );
}

export default Search;
