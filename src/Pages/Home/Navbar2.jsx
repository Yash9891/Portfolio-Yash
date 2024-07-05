import React, { useState, useEffect } from "react";
import { Link} from "react-scroll";


import { MdOutlineLightMode,MdDarkMode } from "react-icons/md";
export default function Navbar2() {
  let [color, setColor] = useState("white");
  
    function changeColor() {
      if (color === "white") {
        setColor("black");
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      } else {
        setColor("white");
        document.body.style.backgroundColor = "white";
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

        <h1>Yas<span>H.</span></h1>
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
              <a href="/" className="navbar--content whitecol" onClick={closeMenu}>
                Home
              </a>
            </li>
    
            <li>
              <a href="/about" className="navbar--content whitecol" onClick={closeMenu}>
                About Me
              </a>
            </li>
           
            <li>
            <div className="darkmode" onClick={changeColor}>{color=="white"?<MdDarkMode/>:<MdOutlineLightMode></MdOutlineLightMode>}</div>
       
        </li>
        <li>
              <a href="/contact" className="navbar--content whitecol conbtn" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        
       
      </nav>
    <div className="navmargin"></div>
  </>
  )
}
