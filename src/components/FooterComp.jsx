import React from "react";
import { Link } from "react-router-dom";

const FooterCom = ({ text1, text2, text3, text4, text5 }) => {
    return (
        <ul className="text-sm capitalize ">
            <li>
                <Link className="py-1 hover:underline inline-block">{text1}</Link>
            </li>
            <li>
                <Link className="py-1 hover:underline inline-block">{text2}</Link>
            </li>
            <li>
                <Link className="py-1 hover:underline inline-block">{text3}</Link>
            </li>
            <li>
                <Link className="py-1 hover:underline inline-block">{text4}</Link>
            </li>
            <li>
                <Link className="py-1 hover:underline inline-block">{text5}</Link>
            </li>
        </ul>
    );
};

export default FooterCom;
