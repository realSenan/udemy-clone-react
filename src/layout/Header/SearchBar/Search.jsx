import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "../../../redux/searchSlice";
import { useNavigate } from "react-router-dom";

function Search() {
    const seacrhValue = useSelector((state) => state.search.value);
    const dispatch = useDispatch();

    const changeHandler = (e) => {
        dispatch(changeValue(e.target.value));
    };

    const navigate = useNavigate()

    const submitHandle = e=> {
        e.preventDefault()
        navigate('/search')
    }
    
    return (
        <React.Fragment>
            <form
                onSubmit={submitHandle}
                className="group hidden w-3/4 items-center rounded-full border border-[#b7bdc2] bg-white transition-all duration-200 focus-within:border-liColor focus-within:bg-white focus-within:ring-2 focus-within:ring-[#c0c4fc] md:flex"
            >
                <span className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-transparent">
                    <AiOutlineSearch size={21} className="text-liColor" />
                </span>
                <input
                    type="text"
                    name=""
                    value={seacrhValue}
                    onChange={changeHandler}
                    id="search"
                    className="h-12 w-full rounded-full bg-transparent px-3 outline-none placeholder:text-[#6a6f73] tracking-[-.1px]"
                    placeholder="Search for anything"
                />
            </form>
        </React.Fragment>
    );
}

export default Search;
