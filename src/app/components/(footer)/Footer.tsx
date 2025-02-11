"use client"
import { usePathname } from "next/navigation";
import "./Footer.css"
import Link from "next/link";
import Image from "next/image";

function Footer() {

    const isActive = usePathname();
  const navLink = [
    { name: 'Home', link: '/', key: "Home" },
        { name: 'About', link: '/about', key: "About" },
        { name: 'Blogs', link: '/blogs', key: "Blog" },
        { name: 'Recipes', link: '/recipes', key: "Recipes" },
  ]

  return (
    <div>
      <div className="footerContainer">
        <div className="footerSeperateLine"></div>
        <div className="footerMainText">
            <Image src='/Images/mainText.png' width={1000} height={1000} alt="Goodness In Bowl" />
        </div>
        <div className="footerLinks">
            {navLink.map((item) => (
              <Link 
              href={item.link} 
              key={item.key}
              className={isActive === item.link ? 'activeNavLink' : ''}>
                  <li className="navLinkList">{item.name}</li>
              </Link>
            ))}
        </div>
        <div className="footerLegal">
          <p>Terms & Conditions</p>
          <p>Licenses</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
