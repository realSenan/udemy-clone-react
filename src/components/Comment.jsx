import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const Comment = ({ data }) => {
    return (
        <div className="bg-white border border-[#d1d7dc] p-5 min-w-fit max-w-[20rem] md:max-w-[24.375rem]  h-[88%] mt-10 flex  flex-col justify-between">
            <img
                src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                alt=""
                width="17.78"
                height="16"
                loading="lazy"
            ></img>
            <p className="mt-4 min-h-[6rem] ">
                {data.text1}
                <span className="font-bold">{data.darkText}</span> {data.text2}
            </p>
            <div className="flex items-center gap-2 my-5">
                <div className="w-10 h-10 rounded-full bg-liColor text-white flex items-center justify-center">
                    {data.pp}
                </div>
                <div className="">{data.name}</div>
            </div>
            <div className="text-activeClr pt-4 flex items-center gap-4 font-bold  border-t border-[#d1d7dc] cursor-pointer hover:opacity-80 transition-all duration-200">
                <AiFillPlayCircle size={40} className="!min-w-min" />
                <span className="line-clamp-2">{data.video}</span>
            </div>
        </div>
    );
};

export default Comment;
