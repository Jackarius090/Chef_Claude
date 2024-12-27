import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList";
import { getRecipeFromAI } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "apple",
    "banana",
    "carrot",
    "dill",
  ]);

  const ingredientsListItems = ingredients.map((ingredient, i) => (
    <li key={i}> {ingredient}</li>
  ));

  function submit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }

  const [recipe, setRecipe] = useState();
  console.log(recipe);

  const getRecipeFromOpenAI = async (ingredientsArray) => {
    try {
      const recipe = await getRecipeFromAI(ingredientsArray);
      setRecipe(recipe);
      console.log(recipe);
    } catch (error) {
      console.error(error);
    }
  };

  const [recipeShown, setRecipeShown] = useState(false);
  const showRecipe = () => {
    setRecipeShown((prev) => !prev);
    getRecipeFromOpenAI(ingredients);
  };

  return (
    <main>
      <form action={submit} className="add-ingredient-form">
        <input name="ingredient" aria-label="Add ingredient" type="text" />
        <button>Submit</button>
      </form>

      <IngredientsList
        ingredientsListItems={ingredientsListItems}
        showRecipe={showRecipe}
        ingredients={ingredients}
      />
      {recipeShown && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
