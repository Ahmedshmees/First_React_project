import Logo from "../../src/assets/images/logo.png";
const Nav = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      link: "/#",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Menu",
      link: "/menu",
    },
    {
      id: 4,
      title: "Services",
      link: "/services",
    },
  ];

  function toggleMenu() {
    const pages = document.querySelector(".pages");
    pages.style.display = pages.style.display === "flex" ? "none" : "flex";
  }

  return (
    <>
      <nav className="nav">
        <div className="navbar">
          <div data-aos="fade-right" className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="pages">
            <ul>
              {links.map((link) => (
                <li data-aos="fade-left" key={link.id}>
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
              <button className="login-btn">Login</button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
