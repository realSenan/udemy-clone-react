import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeError, changeLoading, getProducts } from "../redux/dataSlice";

const useFetch = (url) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(changeLoading());
        axios
            .get(url)
            .then((response) => {
                dispatch(getProducts(response));
            })
            .catch((err) => {
                dispatch(changeError(err));
            })
            .finally(() => {
                dispatch(changeLoading());
            });
    }, [url]);
};

export default useFetch;
