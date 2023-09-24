import { useDispatch } from "react-redux";
import { changeActive } from "../../../../redux/buttonSlice";

const Button = ({ btn }) => {
    const dispatch = useDispatch();

    const { id, text, status } = btn;
    const clickHandler = (e) => {
        dispatch(changeActive(e.currentTarget.id));
    };

    return (
        <button
            onClick={clickHandler}
            id={id}
            className={`btns border-none bg-none font-extrabold hover:text-activeButton transition-all duration-300  ${
                status ? "text-activeButton" : "text-deactiveButton "
            }`}
        >
            {text}
        </button>
    );
};

export default Button;
