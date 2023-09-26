import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import SponsorSection from "./SponsorSection/SponsorSection";
import ProductFilterSection from "./ProductFilterSection/Product";
import CommentSection from "./CommentSection/CommentSection";

function Main() {
    return (
        <main>
            <HeroSection />
            <SponsorSection />
            <ProductFilterSection/>
            <CommentSection/>
        </main>
    );
}

export default Main;
