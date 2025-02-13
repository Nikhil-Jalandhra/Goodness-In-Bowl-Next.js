"use client"
import "./page.css";
import { SiInstagram } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import FilterButton from "./components/(filterButton)/FilterButton";
import filterData from "./DB/filterData";
import blogData from "./DB/blogData";
import BlogCard from "./components/(blogCard)/BlogCard";
import recipeData from "./DB/recipeData";
import RecipeCard from "./components/(recipeCard)/RecipeCard";
import AboutParagraph from "./components/(aboutParagraph)/AboutParagraph";

function Home() {

    const allBowl = useMemo(() => [
      "/Images/homeBowl1.png",
      "/Images/homeBowl2.png",
      "/Images/homeBowl3.png",
      "/Images/homeBowl4.png",
      "/Images/homeBowl5.png",
      "/Images/homeBowl6.png",
      "/Images/homeBowl7.png",
      "/Images/homeBowl8.png",
      "/Images/homeBowl9.png",
      "/Images/homeBowl10.png",
    ], []); // this is a expensve task of cpu there for I use Use memo Hook that why it is only initialize once
  
    // Wrap getRandomBowlImage in useCallback to stabilize its reference
    const getRandomBowlImage = useCallback(() => {
      return allBowl[Math.floor(Math.random() * allBowl.length)];
    }, [allBowl]); // only when allBowl array will update
  
    const [homeBowlImage, setHomeBowlImage] = useState(getRandomBowlImage());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setHomeBowlImage(getRandomBowlImage());
      }, 3000);

      
      return () => clearInterval(intervalId);
    }, [getRandomBowlImage]); // Now it's stable

  return (
    <div>
      <div className="homeContainer">
          <div className="homeTextManager">
            <h1>Wholesome Recipes <br /> for Every Occasion</h1>
            <p>Goodness In Bowl, to Warm Your Soul</p>
            <Image 
            width={3508}
            height={700}
            src="/Images/mainText.png" 
            alt="Goodness In Bowl" />
          </div>
          <div className="homeBowlContainer">
            <div className="homeBowlHolder">
              <Image 
              fill
              src={homeBowlImage} 
              alt="Bowl" />
            </div>
          </div>
      </div>

      <div className="displayRecipeFilter">
        {filterData.map((item, index) => (
          <FilterButton key={index} item={item}/>
        ))}
      </div>
      
          <AboutParagraph/>

          <div className="homeBlogDisplay">
            <h1 className="homeBlogHeading">Our Blogs</h1>
            <div className="homeBlogCardDisplay">
              {blogData.map((item) => (
                item.id <= 3 && <BlogCard item={item} key={item.id}/>
              ))}
            </div>
          </div>

          <div className="homeRecipeDisplay">
            <h1 className="homeRecipeHeading">Our Recipes</h1>
            <div className="homeRecipeCardDisplay">
              {recipeData.map((item, index) => (
                index <= 3 && <RecipeCard item={item} key={item.id}/>
              ))}
            </div>
          </div>

          <div className="homeImageGrid">
            <div className="homeImageGridHeading">
              <h2>Find us on:</h2>
              <div className="socialIcon">
                <p><SiInstagram /></p>
                <p><FaFacebookSquare /></p>
                <p><TfiYoutube /></p>
              </div>
            </div>
            <div className="homeImageGridContainer">
              <Image className="home1" width={2000} height={1500} src='/Images/home1.jpg' alt="home1" />
              <Image className="home2" width={2000} height={1500} src='/Images/home2.jpg' alt="home2" />
              <Image className="home3" width={2000} height={1500} src='/Images/home3.jpg' alt="home3" />
              <Image className="home4" width={2000} height={1500} src='/Images/home4.jpg' alt="home42" />
            </div>
          </div>
    </div>
  );
}

export default Home;
