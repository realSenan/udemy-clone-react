import { useSelector } from "react-redux";
import Photo from "/src/assets/img/TopCategory/empty-shopping-cart-v2.jpg";
import { Link } from "react-router-dom";
import PageShopItem from "../../components/PageShopItem";
import { nanoid } from "nanoid";
import { MdClose } from "react-icons/md";
import { RandomNumber } from "../../hooks/useRandom";

const ShopCart = () => {
    const shopCart = useSelector((state) => state.shop.shopData);

    const totalPrice = shopCart.reduce((a, b) => a + +b.price, 0).toFixed(2);

    return (
        <div className="max-w-[77.75rem] w-full mx-auto py-10 px-3">
            <h3 className="text-4xl font-bold text-liColor">Shopping Cart</h3>

            <div className="mt-10 mb-20 min-h-[22.875rem]">
                <h5 className="text- font-bold text-liColor mb-1">
                    {shopCart.length} Courses in Cart
                </h5>

                <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-10">
                    <div className="flex-grow">
                        {shopCart.map((product) => (
                            <PageShopItem key={nanoid()} product={product} />
                        ))}
                    </div>

                    <div className={`w-full md:w-[18.75rem] ${shopCart.length == 0 && "hidden"}`}>
                        <div className="text-[#6a6f73] font-bold text-lg">Total:</div>
                        <div className="text-3xl mt-1 font-bold text-liColor flex  items-center">
                            ${totalPrice}
                        </div>
                        <button className="mt-4 py-3 w-full bg-[#a435f0] hover:bg-[#8710d8] text-white font-bold">
                            Checkout
                        </button>
                        <hr className="text-border mt-4" />
                        <div className="text-liColor font-bold mt-2">Promotions</div>
                        <label
                            htmlFor="promocode"
                            className="mt-2 flex gap-1 items-center text-disableColor min-w-max "
                        >
                            <MdClose size={20} className="text-liColor" />
                            <span className=" font-bold text-sm inline-block ms-2">
                                ST18MT{RandomNumber()}1023
                            </span>
                            is applied
                        </label>

                        <div className="flex items-center mt-1">
                            <input
                                type="text"
                                id="promocode"
                                placeholder="Enter Coupon"
                                className="py-1 ps-2 w-full border border-r-0 outline-none"
                            />
                            <button className="px-5 h-[2.15rem] text-white font-bold text-sm bg-[#a435f0] hover:bg-[#8710d8]">
                                Apply
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={`border border-[#f1f3f4] min-h-[21.875rem] ${
                        shopCart.length && "hidden"
                    }`}
                >
                    <div className={`grid place-content-center place-items-center gap-5 mt-8 `}>
                        <img src={Photo} alt="Empty List" className="w-[15rem] h-[11.25rem]" />
                        <span>Your cart is empty. Keep shopping to find a course!</span>
                        <Link
                            className="bg-[#a435f0] hover:bg-[#8710d8] h-12 w-36 grid place-content-center font-bold text-white"
                            to={"/"}
                        >
                            Keep Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;
