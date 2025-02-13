"use client";
import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiBowlOfRice } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {

  const [navStatus, setNavStatus] = useState(false);

  const navToogle = () => {
    setNavStatus(!navStatus);
  };

    const isActive = usePathname();
    const navLink = [
        { name: 'Home', link: '/', },
        { name: 'About', link: '/about', },
        { name: 'Blogs', link: '/blogs', },
        { name: 'Recipes', link: '/recipes', },
    ];

  return (
      <nav className="navContainer">
        <div className="navLogoContainer">
          <Link href="/">
            <div className="logoContainer">
                <h2>GIB</h2>
                <span><GiBowlOfRice /></span>
            </div>
          </Link>
        </div>
            <ul className="navLinkBox">
              {navLink.map((item) => (
                <Link
                key={item.name}
                href={item.link} 
                className={ isActive === item.link ? 'activeNavLink' : '' }>
                  <li>{item.name}</li>
                </Link>
              ))}
            </ul>
            <div className="navHamBurger">
              <h2 onClick={navToogle}><GiHamburgerMenu /></h2>
            </div>
            <div className="navLinkSlide" style={{display: navStatus ? "block" : "none"}}>
                {navLink.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link} 
                      className={ isActive === item.link ? 'activeNavLink' : '' }>
                        <p>{item.name}</p>
                    </Link>
                ))}
            </div>
        <div className="navSeperateLine"></div>
      </nav>
  );
}

export default Navbar;
