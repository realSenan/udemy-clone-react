import { Link } from "react-router-dom";

const Archived = () => {
    return (
        <div className="flex items-center justify-center flex-col h-[23.30rem] ">
            <div className="text-liColor font-bold text-xl mb-4">
                Focus on only the courses that matter to you.
            </div>
            <div>
                <Link
                    to={"/my-courses/allCourses"}
                    className="text-activeClr border-b border-b-activeClr font-bold "
                >
                    Go to the All Courses tab
                </Link>{" "}
                to create a list.
            </div>
        </div>
    );
};

export default Archived;
