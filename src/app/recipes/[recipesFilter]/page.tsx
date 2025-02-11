"use client"
import "./page.css";
import { use, useEffect, useState } from "react";
import FilterButton from "@/app/components/(filterButton)/FilterButton";
import filterData from "@/app/DB/filterData";
import recipeData from "@/app/DB/recipeData";
import RecipeCard from "@/app/components/(recipeCard)/RecipeCard";


interface Params {
    recipesFilter?: string;
  }

function Recipes({params}: { params: Promise<Params>}) {

  const { recipesFilter } = use(params);
  
  const [finalData, setFinalData] = useState<typeof recipeData>([]);
  
  useEffect(() => {
    const filterData = recipesFilter ? recipeData.filter((item) => (item.tags.includes(recipesFilter))) : recipeData;
    
    setFinalData(filterData);
  }, [recipesFilter]);

  return (
    <div>
        <div className="recipesContainer">

          <div className="displayRecipeFilter">
            {filterData.map((item, index) => (
              <FilterButton key={index} item={item}/>
            ))}
          </div>

          <div className="recipesCardContainer">
            {finalData.map((item, key) => (
              <RecipeCard item={item} key={key} />
            ))}
            </div>
        </div>
    </div>
  );
}

export default Recipes;
