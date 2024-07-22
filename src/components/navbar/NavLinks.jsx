
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

  return (
    <>
      <li>
        <a
          href="#home"
          onClick={(e) => handleClick(e, "home")}
          className="nav-link hover:text-gray-300"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          onClick={(e) => handleClick(e, "about")}
          className="nav-link hover:text-gray-300"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#skills"
          onClick={(e) => handleClick(e, "skills")}
          className="nav-link hover:text-gray-300"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={(e) => handleClick(e, "projects")}
          className="nav-link hover:text-gray-300"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#resume"
          onClick={(e) => handleClick(e, "resume")}
          className="nav-link hover:text-gray-300"
        >
          Resume
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "contact")}
          className="nav-link hover:text-gray-300"
        >
          Contact
        </a>
      </li>
      
    </>
  );
};

export default NavLinks;
