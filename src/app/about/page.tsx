import "./page.css";
import AboutParagraph from "../components/(aboutParagraph)/aboutParagraph";

//---------------------------------------------------
import { LiaPrayingHandsSolid } from "react-icons/lia";
import { GiHotSpices } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineHighQuality } from "react-icons/md";
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
        <div className="aboutCommitContainer">

        <div className="aboutCommitSection">
          <h1 className="commitment">Our commitment to sustainability</h1>

          <div className="aboutCommitLeftContainer">
            <div className="aboutCommitLeft">
              <div className="aboutCommitLeftText">
                <h1>A welcoming environment</h1>
                <p>A warm, friendly atmosphere where everyone feels comfortable and valued.</p>
              </div>
              <span><LiaPrayingHandsSolid/></span>
            </div>
            <div className="aboutCommitLeft">
              <div className="aboutCommitLeftText">
                <h1>Uncompromising quality</h1>
                <p>Maintaining the highest standards in every ingredient, dish, and dining experience.</p>
              </div>
              <span><MdOutlineHighQuality/></span>
            </div>
          </div>

          <div className="aboutCommitSectionImg">
            <Image fill src="/Images/aboutCommit.jpg" alt="" />
          </div>

          <div className="aboutCommitRightContainer">
            <div className="aboutCommitRight">
              <span><GiHotSpices/></span>
              <div className="aboutCommitRightText">
                <h1>Authentic flavors</h1>
                <p>Dishes made with genuine, traditional ingredients, delivering true, original tastes.</p>
              </div>
            </div>
            <div className="aboutCommitRight">
              <span><RiCustomerService2Fill/></span>
              <div className="aboutCommitRightText">
                <h1> Attentive service</h1>
                <p>Providing thoughtful, prompt care to ensure every guest feels well-looked after.</p>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default About;
