export default function IngredientsList({
  ingredientsListItems,
  ingredients,
  showRecipe,
}) {
  return (
    <section>
      {ingredients.length > 0 && <h1>Ingriedients on hand:</h1>}
      <article className="ingredient-list">
        <ul>{ingredientsListItems}</ul>
      </article>
      {ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={showRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
