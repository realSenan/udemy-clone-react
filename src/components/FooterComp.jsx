import React from "react";
import { Link } from "react-router-dom";

const FooterCom = ({ text1, text2, text3, text4, text5 }) => {
    return (
        <ul className="text-sm capitalize ">
            <li className="py-1 hover:underline">
                <Link>{text1}</Link>
            </li>
            <li className="py-1 hover:underline">
                <Link>{text2}</Link>
            </li>
            <li className="py-1 hover:underline">
                <Link>{text3}</Link>
            </li>
            <li className="py-1 hover:underline">
                <Link>{text4}</Link>
            </li>
            <li className="py-1 hover:underline">
                <Link>{text5}</Link>
            </li>
        </ul>
    );
};

export default FooterCom;
