import React from "react";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

const Product = () => {
    useFetch(import.meta.env.VITE_DATA_API);

    const data = useSelector((state) => state.data.product.data);

    return <div></div>;
};

export default Product;
