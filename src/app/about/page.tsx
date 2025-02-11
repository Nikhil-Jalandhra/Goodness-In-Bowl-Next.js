import "./page.css";
import AboutParagraph from "../components/(aboutParagraph)/AboutParagraph";
import Image from "next/image";

function About() {
  return (
    <div>
      <div className="aboutContainer">
        <div className="aboutHeroImg">
          <Image fill src="/Images/aboutHero.jpg" alt="cafe" />
        </div>
        <AboutParagraph/>
        <div className="aboutImageSection">
            <div className="aboutImageContainer">
              <div className="oneAboutImage">
                  <div className="oneAboutImageCover">LOVE 💝</div>
                  <Image fill src="/Images/about1.jpg" alt="Dish" />
              </div>
              <div className="twoAboutImage">
                  <div className="twoAboutImageCover">FRESH 🌾</div>
                  <Image fill src="/Images/about2.jpg" alt="Farm" />
              </div>
              <div className="threeAboutImage">
                    <div className="threeAboutImageCover">CLEAN 🫧</div>
                    <Image fill src="/Images/about3.jpg" alt="Cooking" />
              </div>
            </div>
        </div>
        <div className="aboutTextSection">
          <div className="aboutTextContainer">
          <p>Join us on this delicious journey toward a more conscious and flavorful lifestyle. Together, we’ll explore the joys of cooking, the importance of mindful eating, and the incredible impact that good food can have on our well-being. Welcome to a community that celebrates health, happiness, and the wonderful world of nutritious food</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
