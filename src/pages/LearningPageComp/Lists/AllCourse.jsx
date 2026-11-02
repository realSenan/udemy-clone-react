import { Link } from "react-router-dom";

const AllCourse = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[23.30rem] ">
      <div className="text-liColor font-bold text-xl mb-4">
        Organize and access your courses faster!
      </div>
      <div>
        <Link
          to={"/search"}
          className="text-activeClr border-b border-b-activeClr font-bold "
        >
          Go to search 
        </Link>{" "}
        to create a list.
      </div>
    </div>
  );
};

export default AllCourse;
