import { useSelector } from "react-redux";
import Photo from "/src/assets/img/TopCategory/empty-shopping-cart-v2.jpg";
import { Link } from "react-router-dom";
import PageShopItem from "../../components/PageShopItem";

const ShopCart = () => {
    const shopCart = useSelector((state) => state.shop.shopData);

    return (
        <div className="max-w-[77.75rem] w-full mx-auto py-10 px-3">
            <h3 className="text-4xl font-bold text-liColor">Shopping Cart</h3>

            <div className="mt-10 mb-20 min-h-[22.875rem]">
                <h5 className="text- font-bold text-liColor mb-1">
                    {shopCart.length} Courses in Cart
                </h5>

                <div className="">
                    <div className="">
                        {shopCart.map((product) => (
                            <PageShopItem product={product} />
                        ))}
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
