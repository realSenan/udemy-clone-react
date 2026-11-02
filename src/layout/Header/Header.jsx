import { useEffect, useState } from "react";
import Category from "./Categories/Category";
import Logo from "./Logo/Logo";
import Search from "./SearchBar/Search";
import HeaderPopUp from "./HeaderPopUp/HeaderPopUp";
import LoginSection from "./LoginSection/LoginSection";
import { TfiAlignJustify } from "react-icons/tfi";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Header() {
  const linkData = useSelector((state) => state.data.navLinks.UdemyCategories);
  const location = useLocation();

  const [activeMbMenu, setActiveMbMenu] = useState(false);

  useEffect(() => {
    setActiveMbMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", activeMbMenu);

    const closeMenuOnDesktop = () => {
      if (window.innerWidth >= 768) setActiveMbMenu(false);
    };

    window.addEventListener("resize", closeMenuOnDesktop);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("resize", closeMenuOnDesktop);
    };
  }, [activeMbMenu]);

  return (
    <header className="h-[72px] bg-white flex items-center shadow-xl z-50 relative ">
      <div className="container mx-auto text-sm px-5 ">
        <nav className="flex items-center gap-5 justify-between md:justify-normal scroll-smooth">
          <TfiAlignJustify
            className="md:hidden cursor-pointer "
            size={20}
            onClick={() => setActiveMbMenu(!activeMbMenu)}
          />

          <div className="left relative z-[9999] flex items-center gap-4">
            <Logo />
            <Category
              linkData={linkData}
              activeMbMenu={activeMbMenu}
              setActiveMbMenu={setActiveMbMenu}
            />
          </div>
          <Search />
          <HeaderPopUp GiShoppingCart={GiShoppingCart} />
          <LoginSection />
        </nav>
      </div>
    </header>
  );
}

export default Header;
