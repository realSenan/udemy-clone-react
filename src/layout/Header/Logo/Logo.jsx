import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to={"/"} >
            <picture className="w-24 h-9 block">
                <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="" />
            </picture>
        </Link>
    );
}

export default Logo;
