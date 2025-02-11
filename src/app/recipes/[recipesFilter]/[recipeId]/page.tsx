"use client"
import "./page.css";
import { LiaCircle } from "react-icons/lia";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { use, useState } from "react";
import Link from "next/link";
import recipeData from "@/app/DB/recipeData";
import Image from "next/image";


function RecipeSummary({params}) {

  const { recipeId } = use(params);
    const  recipeSummaryData = recipeData.find(item => (item.id === Number(recipeId)));

    type RecipeNutrients = {
      [key: string]: string | undefined;
    };
    
    const typeNutrients: RecipeNutrients = recipeSummaryData?.nutrients || {};

    const [ingredientDone, setIngredientDone] = useState<Record<string, boolean>>({});
    
    const ingredientToggle = (itemName: string) => {
      setIngredientDone((prevState) => ({ ...prevState, [itemName]: !prevState[itemName] }));
    };

  return (
    <div>
      <div className="recipeSummaryContainer1">
        <div className="recipeSummaryContent1">
            <h1 className="recipeName1">{recipeSummaryData?.name}</h1>

            <div className="recipeSummaryAbout1">
              <div className="recipeSummaryHeroImg1">
                <Image fill src={recipeSummaryData?.image || ""} alt="" />
              </div>
              <div className="recipeAboutP">
                <p>{recipeSummaryData?.about}</p>
              </div>
            </div>

            <div className="reicpeNutrients">
                <div className="nutrientsHeading">
                  <h2>Nutrients</h2>
                </div>
                {recipeSummaryData?.nutrients && (
                  Object.keys(recipeSummaryData?.nutrients).map((key, index)=> (
                    <div key={index} className="reicpeNutrientsDetails">
                      <p>{typeNutrients[key]}</p>
                      <span>{key}</span>
                    </div>
                  ))
                )}
            </div>

                <div className="ingredinetsTable">
                  {recipeSummaryData?.ingredientSections.map((item, index) => (
                    <div key={index}>
                      <h2>{item.name}</h2>
                      <div>
                        <div>{item.items.map((item, index) => (
                            <div onClick={() => ingredientToggle(item.name)} 
                            className={`ingredinetsTableRow ${ingredientDone[item.name] ? "ingredinetsTableRowDone" : ""}`} key={index} style={{display: "flex"}}>
                                <span className="tableDot">{ingredientDone[item.name] ? <IoIosCheckmarkCircleOutline /> : <LiaCircle/>}</span>
                                <p>{item.name}, {item.quantity}, {item.unit}</p>
                            </div>
                        ))}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h2>Tools You Need</h2>
                  {recipeSummaryData?.tools.map((item, index)=> (
                    <p key={index}>{index+1}. {item}</p>
                  ))}
                </div>

                <div>
                  <h2>Prepration</h2>
                {recipeSummaryData?.preparationSteps.map((item, index)=> (
                  <p key={index}>{index+1}. {item}</p>
                ))}
                  
                </div>

                <div className="recipeInstructionsContainer1">
                  {recipeSummaryData?.cookingSteps.map((item, index)=> (
                    <div key={index}>
                      <h2>{item.name}</h2>
                      {item.steps.map((item,index)=> (
                        <p key={index}>{index+1}. {item}</p>
                      ))}
                    </div>
                  ))}
                </div>
         
                <h2>"{recipeSummaryData?.servingSuggestions}"</h2>
                      
                <iframe width="100%" height="500px" src="https://www.youtube.com/embed/XuttnylxuXY?si=XwsX31TDDp9IO1YG" title={recipeSummaryData?.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                <h2>{recipeSummaryData?.notes}</h2>

                <div className="recipeVideoAbout1">
                    <p>Follow for more: <Link href="/">GOODNESS IN BOWL</Link></p>
                </div>
        </div>

        <div className="recipeSummaryContent2">
          <div className="viewMoreRecipes">
            <h2 className="viewMoreHeading">View More</h2>
            <div className="sepcificRecipe">
              <div className="viewMoreRecipesImg">
                <Image fill src="/Images/recipe1.jpg" alt="recipe" />
              </div>
              <div className="specificRecipeAbout">
                  <h2>Poha</h2>
                  <p>4 servings</p>
                  <p>30 min prep</p>
                  <p>45 min cook</p>
              </div>
              <p></p>
            </div>
            <div className="sepcificRecipe">
              <div className="viewMoreRecipesImg">
                <Image fill src="/Images/recipe1.jpg" alt="recipe" />
              </div>
              <div className="specificRecipeAbout">
                  <h2>Poha</h2>
                  <p>4 servings</p>
                  <p>30 min prep</p>
                  <p>45 min cook</p>
              </div>
              <p></p>
            </div>
            <div className="sepcificRecipe">
              <div className="viewMoreRecipesImg">
                <Image fill src="/Images/recipe1.jpg" alt="recipe" />
              </div>
              <div className="specificRecipeAbout">
                  <h2>Poha</h2>
                  <p>4 servings</p>
                  <p>30 min prep</p>
                  <p>45 min cook</p>
              </div>
              <p></p>
            </div>
            <div className="sepcificRecipe">
              <div className="viewMoreRecipesImg">
                <Image fill src="/Images/recipe1.jpg" alt="recipe" />
              </div>
              <div className="specificRecipeAbout">
                  <h2>Poha</h2>
                  <p>4 servings</p>
                  <p>30 min prep</p>
                  <p>45 min cook</p>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeSummary;
