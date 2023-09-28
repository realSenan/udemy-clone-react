import { changeActive, setButtonContext } from "../redux/buttonSlice";

export const useURL = (dispatch) => {
    let filter = window.location.search;
    filter = filter.replace("%20", " ");
    filter = filter.slice(1);

    dispatch(setButtonContext(filter || "python"));
    dispatch(changeActive(filter || "python"));
    // console.log("DISPATCH", e);
};
