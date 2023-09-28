import React from "react";
import { Link } from "react-router-dom";

const FeaturedLink = ({ text, student, category, text2, student2, text3, student3 }) => {
    return (
        <div>
            <h3 className="text-xl text-liColor font-bold line-clamp-1">{category}</h3>
            <ul>
                <li className="mt-5">
                    <Link className="text-activeClr font-bold underline">{text}</Link>
                    <div className="mt-2 text-sm text-disableColor">{student} Students</div>
                </li>
                <li className="mt-5">
                    <Link className="text-activeClr font-bold underline">{text2}</Link>
                    <div className="mt-2 text-sm text-disableColor">{student2} Students</div>
                </li>
                <li className="mt-5">
                    <Link className="text-activeClr font-bold underline">{text3}</Link>
                    <div className="mt-2 text-sm text-disableColor">{student3} Students</div>
                </li>
            </ul>
        </div>
    );
};

export default FeaturedLink;
