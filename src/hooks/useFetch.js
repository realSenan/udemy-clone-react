import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeError, changeLoading, getProducts } from "../redux/dataSlice";

const useFetch = (url) => {
    const dispatch = useDispatch();
    
};

export default useFetch;
