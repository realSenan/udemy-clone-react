import Img1 from "/src/assets/img/TopCategory/1.jpg";
import Img2 from "/src/assets/img/TopCategory/2.jpg";
import Img3 from "/src/assets/img/TopCategory/3.jpg";
import Img4 from "/src/assets/img/TopCategory/4.jpg";
import Img6 from "/src/assets/img/TopCategory/6.jpg";
import Img7 from "/src/assets/img/TopCategory/7.jpg";
import Img8 from "/src/assets/img/TopCategory/8.jpg";
import Img9 from "/src/assets/img/TopCategory/9.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeValue } from "../../../../redux/searchSlice";
import { getCatalogSearchTerm, isCatalogAvailable } from "../../../../utils/catalogAvailability";

const categories = [
  { title: "Design", image: Img1 },
  { title: "Development", image: Img2 },
  { title: "Marketing", image: Img3 },
  { title: "IT and Software", image: Img4, responsiveClass: "hidden mobil:block" },
  { title: "Personal Development", image: Img6, responsiveClass: "hidden mobil:block" },
  { title: "Business", image: Img7, responsiveClass: "hidden mobil:block" },
  { title: "Photography", image: Img8, responsiveClass: "hidden mobil:block" },
  { title: "Music", image: Img9, responsiveClass: "hidden mobil:block" },
];

const TopCategory = () => {
  const dispatch = useDispatch();

  const cardContent = (category, available) => (
    <>
      <picture className="relative block max-h-[18.75rem] max-w-[18.75rem] overflow-hidden bg-gray-secondary">
        <img
          src={category.image}
          alt=""
          className={`w-full transition duration-300 ${
            available ? "group-hover:scale-105" : "grayscale opacity-45"
          }`}
        />
        {!available && (
          <span className="absolute inset-0 flex items-center justify-center bg-liColor/20 px-4 text-center text-sm font-bold text-white">
            Courses coming soon
          </span>
        )}
      </picture>
      <div className="mt-2 flex items-center gap-2">
        <h3 className={`font-bold text-xl ${available ? "text-liColor" : "text-[#8b9299]"}`}>{category.title}</h3>
        {!available && <span className="rounded-full border border-[#b7bdc2] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#737a80]">Soon</span>}
      </div>
    </>
  );

  return (
    <section className="container max-w-[1340px] px-5 py-8 md:py-16">
      <h2 className="font-bold text-2xl text-liColor">Top categories</h2>
      <div className="mt-10 grid place-items-center gap-10 mobil:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
        {categories.map((category) => {
          const available = isCatalogAvailable(category.title);
          const className = `group block w-full max-w-[18.75rem] ${category.responsiveClass || ""}`;

          return available ? (
            <Link
              key={category.title}
              className={className}
              to={`/search?${encodeURIComponent(getCatalogSearchTerm(category.title))}`}
              onClick={() => {
                dispatch(changeValue(""));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {cardContent(category, true)}
            </Link>
          ) : (
            <article
              key={category.title}
              aria-disabled="true"
              title="Courses for this category are coming soon"
              className={`${className} cursor-not-allowed select-none`}
            >
              {cardContent(category, false)}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TopCategory;
