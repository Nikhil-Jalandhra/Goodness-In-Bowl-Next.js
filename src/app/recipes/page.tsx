"use client"
import "./page.css";
import RecipeCard from "../components/(recipeCard)/RecipeCard";
import recipeData from "../DB/recipeData";
import filterData from "../DB/filterData";
import FilterButton from "../components/(filterButton)/FilterButton";


function Recipes() {


  return (
    <div>
        <div className="recipesContainer">

          <div className="displayRecipeFilter">
            {filterData.map((item, index) => (
              <FilterButton key={index} item={item}/>
            ))}
          </div>

          <div className="recipesCardContainer">
            {recipeData.map((item, key) => (
              <RecipeCard item={item} key={key} />
            ))}
            {/* {!finalData ? <p></p> : finalData.map((item, key) => (
              <RecipeCard item={item} key={key} />
            ))} */}
            </div>
        </div>
    </div>
  );
}

export default Recipes;
