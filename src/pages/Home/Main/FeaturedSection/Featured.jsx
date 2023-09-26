import React from "react";
import FeaturedLink from "../../../../components/FeaturedLink";

const Featured = () => {
    return (
        <div className="bg-[#f7f9fa]">
            <div className="container max-w-[1340px] py-8 md:py-16  px-5">
                <h2 className="font-bold text-2xl text-liColor">Featured topics by category</h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 place-items-start justify-between mt-5 gap-3">
                    <FeaturedLink
                        category={"Development"}
                        text={"Python"}
                        text2={"Web Development"}
                        text3={"Machine Learning"}
                        student={"36,354,994"}
                        student2={"11,415,615"}
                        student3={"7,070,015"}
                    />

                    <FeaturedLink
                        category={"Business"}
                        text={"Financial Analysis"}
                        text2={"SQL"}
                        text3={"PMP"}
                        student={"1,195,282"}
                        student2={"5,977,561"}
                        student3={"1,733,398"}
                    />

                    <FeaturedLink
                        category={"IT and Software "}
                        text={"Amazon AWS"}
                        text2={"Ethical Hacking"}
                        text3={"Cyber Security"}
                        student={"6,123,456"}
                        student2={"10,931,066"}
                        student3={"3,998,037"}
                    />
                    <FeaturedLink
                        category={"Design "}
                        text={"Photoshop"}
                        text2={"Graphic Design"}
                        text3={"Drawing"}
                        student={"10,909,736"}
                        student2={"3,381,052"}
                        student3={"2,410,849"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Featured;
