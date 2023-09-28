import { useDispatch, useSelector } from "react-redux";
import { useURL } from "../../../../hooks/useURL";

const Button = ({ btn, sliderWrapper }) => {
    const { id, text, status } = btn;

    const dispatch = useDispatch();

    const clickHandler = (e) => {
        window.history.pushState(null, "", `?${e.currentTarget.id}`);
        sliderWrapper?.current.swiper.slideTo(0);
        useURL(dispatch);
    };
    // const dispatch = useDispatch()

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
