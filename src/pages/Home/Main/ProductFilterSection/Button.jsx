import { useDispatch } from "react-redux";
import { syncProductFilterFromUrl } from "../../../../hooks/useURL";

const Button = ({ btn, sliderWrapper, isAvailable }) => {
    const { id, text, status } = btn;

    const dispatch = useDispatch();

    const clickHandler = (e) => {
        if (!isAvailable) return;
        window.history.pushState(null, "", `?${e.currentTarget.id}`);
        sliderWrapper?.current.swiper.slideTo(0);
        syncProductFilterFromUrl(dispatch);
    };
    // const dispatch = useDispatch()

    return (
        <button
            onClick={clickHandler}
            id={id}
            disabled={!isAvailable}
            aria-disabled={!isAvailable}
            title={isAvailable ? undefined : "No courses are currently available in this topic"}
            className={`btns border-none bg-none font-bold transition-all duration-300 ${
                !isAvailable
                    ? "cursor-not-allowed text-[#b7bdc2]"
                    : `hover:text-activeButton ${status ? "text-activeButton" : "text-deactiveButton"}`
            }`}
        >
            {text}
        </button>
    );
};

export default Button;
