import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeValue } from "../redux/searchSlice";
import { getCatalogSearchTerm, isCatalogAvailable } from "../utils/catalogAvailability";

const FeaturedLink = ({ text, student, category, text2, student2, text3, student3 }) => {
    const dispatch = useDispatch();
    const topics = [
        { label: text, students: student },
        { label: text2, students: student2 },
        { label: text3, students: student3 },
    ];
    const categoryAvailable = topics.some((topic) => isCatalogAvailable(topic.label));

    return (
        <div>
            <h3 className={`text-xl font-bold line-clamp-1 ${categoryAvailable ? "text-liColor" : "text-[#8b9299]"}`}>
                {category}
                {!categoryAvailable && <span className="ml-2 align-middle text-[10px] uppercase tracking-wide">Coming soon</span>}
            </h3>
            <ul>
                {topics.map((topic) => {
                    const available = isCatalogAvailable(topic.label);
                    return (
                        <li key={topic.label} className="mt-5">
                            {available ? (
                                <Link
                                    to={`/search?${encodeURIComponent(getCatalogSearchTerm(topic.label))}`}
                                    onClick={() => {
                                        dispatch(changeValue(""));
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                    className="font-bold text-activeClr underline underline-offset-2"
                                >
                                    {topic.label}
                                </Link>
                            ) : (
                                <span
                                    aria-disabled="true"
                                    title="Courses for this topic are coming soon"
                                    className="cursor-not-allowed font-bold text-[#8b9299]"
                                >
                                    {topic.label} <span className="text-[10px] uppercase tracking-wide">Soon</span>
                                </span>
                            )}
                            <div className="mt-2 text-sm text-disableColor">{topic.students} Students</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default FeaturedLink;
