import React, { useState, useEffect } from "react";
import { Link} from "react-scroll";

import { MdOutlineLightMode,MdDarkMode } from "react-icons/md";
function Navbar() {
  let [color, setColor] = useState("white");
  
    function changeColor() {

      if (color === "white") {
        setColor("black");
        document.body.style.backgroundColor = "#141418";
        document.body.style.color = "white";
      } else {
        setColor("white");
        document.body.style.backgroundColor = "#f5f7f7";
        document.body.style.color = "black";
      }
    }
  
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <>
      <nav className={`navbar ${navActive ? "active" : ""}`}>
        <div className="nav__logo">

          <h1>Yash<span>.</span></h1>
          {/* <h3>
      Lets go for a <FaBeer />?
    </h3> */}
        </div>
        <a
          href="#"
          className={`nav__hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </a>
        <div className={`navbar--items ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="navbar--content"
              >
                Home
              </Link>
            </li>
            <li>
            <Link
  onClick={closeMenu}
  activeClass="navbar--active-content"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
  to="mySkills"  // Make sure this matches the ID of your target element
  className="navbar--content"
>
  Skills
</Link>

            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to="projects"
                className="navbar--content"
              >
                Projects
              </Link>
            </li>
            <li>
            <Link
          
  onClick={closeMenu}
  activeClass="navbar--active-content"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
  to="resume"  // Make sure this matches the ID of your target element
  className="navbar--content"
>
  Resume
</Link>

            </li>
            <li>
              <a href="/about" className="navbar--content whitecol " onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="navbar--content whitecol" onClick={closeMenu}>
                Contact
              </a>
            </li>
            <li>
            <div className="darkmode" onClick={changeColor}>{color=="white"?<MdDarkMode/>:<MdOutlineLightMode></MdOutlineLightMode>}</div>
       
        </li>
          </ul>
        </div>
        
        
       
      </nav>
    <div className="navmargin"></div>
    

    </>
  );
}

export default Navbar;
