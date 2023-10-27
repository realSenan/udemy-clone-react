import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShopCartItem from "../../../../components/ShopCartItem";
import { addProduct } from "../../../../redux/shopSlice";
import { nanoid } from "nanoid";
import { removeWashList } from "../../../../redux/wishList";
import toast from "react-hot-toast";

const Faworite = () => {
    const wishData = useSelector((state) => state.wish.data);
    const shopData = useSelector((state) => state.shop.shopData);
    const [activeWish, setActiveWish] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        setActiveWish(wishData.filter((wData) => shopData.every((sData) => wData.id != sData.id)));
    }, [shopData, wishData]);

    const [mouseEnter, setMouseEnter] = useState(false);
    const mouseHandler = (e) => {
        setMouseEnter(true);
    };

    const LeaveMouseHandler = (e) => {
        setMouseEnter(false);
    };

    const addItem = (product) => {
        dispatch(addProduct(product));
        dispatch(removeWashList(product.id));
        toast.success("Succesfly added!")
    };

    return (
        <div
            onMouseEnter={mouseHandler}
            onMouseLeave={LeaveMouseHandler}
            className="relative hover:text-activeClr"
        >
            <div className="cursor-pointer relative">
                <Link to={"/my-courses/wishlist"}>
                    <AiOutlineHeart size={24} />
                    {activeWish.length != 0 && (
                        <div className="w-6 h-5 rounded-full bg-activeClr absolute -top-2 -right-2 flex items-center justify-center text-white text-sm">
                            {activeWish.length}
                        </div>
                    )}
                </Link>
            </div>

            {mouseEnter && (
                <div className="absolute  right-0 pt-7 ">
                    <div className="bg-white shadow-lg PopDown w-[18.75rem] min-h-[6rem] flex items-center justify-center flex-col">
                        {activeWish.length == 0 ? (
                            <>
                                <div className="text-disableColor ">Your wishlist is empty.</div>
                                <div className="font-bold text-activeClr mt-2">Explore courses</div>
                            </>
                        ) : (
                            <ul className=" grid gap-5 max-h-[30.625rem] overflow-y-auto">
                                {activeWish.map((item) => (
                                    <li key={nanoid()} className="border-b border-border p-4 pe-2">
                                        {<ShopCartItem product={item} />}
                                        <button
                                            onClick={(e) => addItem(item)}
                                            className="border w-full py-2.5 text-liColor font-bold mt-3 hover:bg-[#e3e7ea]"
                                        >
                                            Add to cart
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Faworite;
