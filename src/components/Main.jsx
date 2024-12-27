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

  async function getRecipeFromOpenAI() {
    const recipeMarkdown = await getRecipeFromAI(ingredients);
    setRecipe(recipeMarkdown);
  }

  return (
    <main>
      <form action={submit} className="add-ingredient-form">
        <input name="ingredient" aria-label="Add ingredient" type="text" />
        <button>Submit</button>
      </form>

      <IngredientsList
        ingredientsListItems={ingredientsListItems}
        ingredients={ingredients}
        getRecipeFromOpenAI={getRecipeFromOpenAI}
      />
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
