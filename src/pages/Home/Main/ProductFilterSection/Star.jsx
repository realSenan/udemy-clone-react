import { nanoid } from "nanoid";
import fullStar from "/src/assets/img/star/FullStar.png";
import halfStar from "/src/assets/img/star/halfStar.png";

const Star = ({ product, clr, clr2 }) => {
    const ratingCalculator = product.rating;
    const full_Star = Math.floor(ratingCalculator);
    const half_Star = ratingCalculator - full_Star >= 0.5;

    const stars = [];
    for (let i = 0; i < full_Star; i++) {
        stars.push(<img key={nanoid()} className="w-3 h-3" src={fullStar} alt="noname" />);
    }
    if (half_Star) {
        stars.push(<img key={nanoid()} className="w-3 h-3" src={halfStar} alt="noname" />);
    }

    return (
        <section className="flex  items-center mt-1  ">
            <span className={`text-sm font-extrabold text-[#3d3c0a] ${clr}`}>
                {ratingCalculator}
            </span>
            <figure className="flex ms-2 gap-1">{stars}</figure>
            <span className={`text-[12px] ms-1 text-disableColor ${clr2} `}>
                {product.peopleNumber}
            </span>
        </section>
    );
};

export default Star;
