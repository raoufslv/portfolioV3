import { useTranslation } from "react-i18next";

const NavLinks = () => {
  const handleClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const { t } = useTranslation();

  return (
    <>
      {t("navlinks", { returnObjects: true }).map((navlink, i) => (
        <li key={i}>
          <a
            href={`#${navlink.url}`}
            onClick={(e) => handleClick(e, navlink.url)}
            className="nav-link hover:text-gray-300"
          >
            {navlink.name}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
