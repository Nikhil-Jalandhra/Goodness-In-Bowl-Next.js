"use client";
import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiBowlOfRice } from "react-icons/gi";

function Navbar() {

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
                <h1>GIB</h1>
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
        <div className="navSeperateLine"></div>
      </nav>
  );
}

export default Navbar;
