export default function IngredientsList({
  ingredientsListItems,
  ingredients,
  getRecipeFromOpenAI,
  ref,
}) {
  return (
    <section>
      {ingredients.length > 0 && <h1>Ingredients on hand:</h1>}
      <article className="ingredient-list">
        <ul>{ingredientsListItems}</ul>
      </article>
      {ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div ref={ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={getRecipeFromOpenAI}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
