import { useDispatch } from "react-redux";
import { changeActive } from "../../../../redux/buttonSlice";

const Button = ({ btn, sliderWrapper }) => {
    const dispatch = useDispatch();

    const { id, text, status } = btn;

    const clickHandler = (e) => {
        dispatch(changeActive(e.currentTarget.id));
        sliderWrapper?.current.swiper.slideTo(0);
    };

    return (
        <button
            onClick={clickHandler}
            id={id}
            className={`btns border-none bg-none font-bold hover:text-activeButton transition-all duration-300  ${
                status ? "text-activeButton" : "text-deactiveButton "
            }`}
        >
            {text}
        </button>
    );
};

export default Button;
