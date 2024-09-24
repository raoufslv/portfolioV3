import NavLinks from "@/components/navbar/NavLinks.jsx";
import MobileMenu from "@/components/navbar/MobileMenu.jsx";
import Logo from "@/components/navbar/Logo.jsx";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default to "en"

  const { i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set the selected language based on i18n's current language
    const currentLanguage = i18n.language || "en"; // Fallback to "en" if no language is set
    setSelectedLanguage(currentLanguage);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng); // Update selected language when changed
  };

  let navbarClasses =
    "sticky top-0 z-50 mx-auto xl:px-16 lg:px-10 px-8 py-4 flex items-center justify-between xl:text-xl lg:text-lg";
  if (scrolled) {
    navbarClasses += " navbar scrolled";
  }
  return (
    <div className={navbarClasses}>
      <div className="text-white flex items-center">
        {/* Mobile Menu Button */}
        <MobileMenu />
        {/* Logo */}
        <Logo />
      </div>

      {/* Desktop Menu */}
      <nav aria-label="Main navigation" className="hidden md:flex">
        <ul className="text-white flex xl:gap-10 justify-center text-xs md:text-base xl:text-lg">
          <NavLinks />
        </ul>
      </nav>
      {/* Select button for the language */}
      <select
        className="custom-select rounded-md focus:outline-none focus:ring-2 focus:ring-bleuish nav-link hover:text-gray-300"
        value={selectedLanguage} // Bind value to the selectedLanguage state
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
