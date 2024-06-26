import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import SponsorSection from "./SponsorSection/SponsorSection";
import ProductFilterSection from "./ProductFilterSection/Product";
import CommentSection from "./CommentSection/CommentSection";
import BestSeller from "./BestSellerSection/BestSeller";
import TopCategory from "./TopCategorySection/TopCategory";
import Featured from "./FeaturedSection/Featured";

function Main() {
    return (
        <main>
            <HeroSection />
            <SponsorSection />
            <ProductFilterSection />
            <CommentSection />
            <BestSeller />
            <TopCategory />
            <Featured />
        </main>
    );
}

export default Main;
