import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { findFilter } from "../redux/filterSlice";

const Filter = ({ type, arr, name, hText, clearVersion }) => {
    const [height, setHeight] = useState(false);
    const [HeaderHeight, setHeaderHeight] = useState(false);
    const [checkedValues, setCheckedValues] = useState(Array(arr.length).fill(false));
    const dispatch = useDispatch();
    const showBtn = arr.length > 5;

    useEffect(() => {
        setCheckedValues(Array(arr.length).fill(false));
        dispatch(findFilter(5));
    }, [arr.length, clearVersion, dispatch]);

    const openBlock = () => {
        setHeaderHeight(!HeaderHeight);
    };

    const blockEvent = (e) => {
        e.stopPropagation();
    };

    const handleCheckboxChange = (item, index) => {
        const newCheckedValues =
            type === "radio"
                ? Array(arr.length).fill(false)
                : [...checkedValues];

        newCheckedValues[index] = type === "radio" ? true : !newCheckedValues[index];

        setCheckedValues(newCheckedValues);
        if (item?.img) {
            dispatch(findFilter(newCheckedValues[index] ? item.text.slice(0, 4) : 5));
        }
    };

    return (
        <div
            className={`border-t border-border py-3 ${!HeaderHeight && "h-14"} overflow-hidden`}
            id="res"
        >
            <button
                type="button"
                onClick={openBlock}
                className="w-full font-bold text-xl flex items-center justify-between text-liColor cursor-pointer text-left"
            >
                {hText}
                <span className="text-base inline-block  ">
                    {HeaderHeight ? <FiChevronUp /> : <FiChevronDown />}
                </span>
            </button>

            <form
                onClick={blockEvent}
                className={` mt-4 ${height ? "min-h-fit" : "max-h-[9rem]"} overflow-hidden`}
            >
                {arr.map((item, i) => {
                    return (
                        <div key={nanoid()} className="flex items-center gap-3">
                            <input
                                type={type}
                                id={name + i}
                                name={name}
                                checked={checkedValues[i]}
                                onChange={() => handleCheckboxChange(item, i)}
                                className="cursor-pointer"
                            />

                            <label
                                htmlFor={name + i}
                                name={name}
                                className={`flex items-center cursor-pointer ${
                                    item?.img && "justify-between"
                                }  text-[#2D2F31] w-full gap-x-2`}
                            >
                                {item?.img && (
                                    <div className="flex items-center gap-1 min-w-[4.375rem] text-[#b4690e]">
                                        {item?.img?.map(
                                            (img) =>
                                                (img == "halfStar" && (
                                                    <BsStarHalf key={nanoid()} />
                                                )) ||
                                                (img == "fullStar" && (
                                                    <AiFillStar key={nanoid()} />
                                                )) || <AiOutlineStar key={nanoid()} />,
                                        )}
                                    </div>
                                )}
                                <span className={`text-sm min-w-max ${!item?.img && "text-base"}`}>
                                    {item.text}
                                </span>
                                <span className="text-sm text-disableColor min-w-max">
                                    {item.info}
                                </span>
                            </label>
                        </div>
                    );
                })}
            </form>

            {showBtn && (
                <>
                    {!height && (
                        <div className="shadow-closedShadow z-10 relative h-0 overflow-hidden">
                        </div>
                    )}
                    <button
                        className="font-bold text-activeClr text-sm flex items-center gap-2 "
                        onClick={(e) => {
                            setHeight(!height);
                            blockEvent(e);
                        }}
                    >
                        {height ? (
                            <>
                                Show less <FiChevronUp />
                            </>
                        ) : (
                            <>
                                Show more <FiChevronDown />
                            </>
                        )}
                    </button>
                </>
            )}
        </div>
    );
};

export default Filter;
