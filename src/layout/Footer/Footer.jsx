import FooterCom from "../../components/FooterComp";
import { BsGlobe } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="py-6 px-6 bg-[#1c1d1f] text-white min-[22.5rem]">
            <div className="container max-w-[1340px]   ">
                <div className="md:flex justify-between items-baseline gap-4">
                    <div className=" grid  gap-5 md:grid-cols-3 w-[48rem]">
                        <FooterCom
                            text1={"Udemy Buisness"}
                            text2={"Teach on udemy"}
                            text3={"get the app"}
                            text4={"about us"}
                            text5={"Contact us"}
                        />
                        <FooterCom
                            text1={"Careers"}
                            text2={"Blog"}
                            text3={"Help and support"}
                            text4={"affiliate"}
                            text5={"investors"}
                        />
                        <FooterCom
                            text1={"teams"}
                            text2={"privacy policy"}
                            text3={"cookie settings"}
                            text4={"sitemap"}
                            text5={"accsessiblity statement"}
                        />
                    </div>

                    <div
                        className="px-9 py-2 mt-5 md:mt-0  gap-1 items-center justify-start border inline-flex border-white"
                        id="langugage"
                    >
                        <BsGlobe /> <span>English</span>
                    </div>
                </div>

                <div className="md:flex justify-between items-center mt-14">
                    <img
                        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                        className="w-24"
                    />
                    <div className="text-[.75rem] mt-2 md:mt-0">© 2023 Udemy, Inc.</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
