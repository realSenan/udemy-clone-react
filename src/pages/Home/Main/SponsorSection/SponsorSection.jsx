import React from "react";

function SponsorSection() {
    return (
        <div className="bg-[#f7f9fa] mt-11">
            <div className="container max-w-[1340px] p-8 md:p-16 ">
                <h2 className="text-[#6a6f73f3] text-center mb-8 text-md md:text-2xl ">
                    Trusted by over 14,400 companies and millions of learners around the world
                </h2>
                <figure className="grid grid-cols-4 lg:grid-cols-8 place-items-center items-center  gap-5 max-w-[1170px]">
                    <img className="" src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg" alt="x" />
                    <img className="" src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg" alt="s" />
                    <img className="" src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg" alt="c" />
                    <img className="" src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg" alt="k" />
                    <img className="" src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg" alt="g" />
                    <img className="" src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg" alt="a" />
                    <img className="" src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg" alt="s" />
                    <img className="" src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg" alt="a" />
                </figure>
            </div>
        </div>
    );
}

export default SponsorSection;
