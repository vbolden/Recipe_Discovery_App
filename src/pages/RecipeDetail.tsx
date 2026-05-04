import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useFavorites } from "../context/FavoritesContext";
import type { MealDetailResponse } from "../types/recipe";
import { endpoints } from "../api/mealdb";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/Errors";

function RecipeDetailPage() {
    const { recipeId } = useParams<{ recipeId: string }>();
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const { data, loading, error } = useFetch<MealDetailResponse>(
        recipeId
            ? endpoints.recipeDetails(recipeId)
            : null
    );

    if (loading) return <Spinner />
    if (error) return <ErrorMessage message={error} />

    const meal = data?.meals?.[0];
    if (!meal) return <ErrorMessage message="Recipe not found" />;

    // EXTRACT INGREDIENTS DYNAMICALLY
    const ingredients = []

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strIngredient${i}`];

        if (ingredient && ingredient.trim() !== "") {
            ingredients.push({
                ingredient,
                measure,
            });
        }
    }

    const favorited = isFavorite(meal.idMeal);

    return (
        <div>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h1>{meal.strMeal}</h1>
            <p>{meal.strCategory} {meal.strArea}</p>

            <button
                onClick={() => favorited
                    ? removeFavorite(meal.idMeal)
                    : addFavorite(meal.idMeal)}
            >
                {favorited ? "Remove from Favorites" : "Add to Favorites"}
            </button>

            <h2>Ingredients</h2>
            <ul>
                {ingredients.map(({ ingredient, measure }) => (
                    <li key={ingredient}>{measure} {ingredient}</li>
                ))}
            </ul>

            <h2>Instructions</h2>
            <p>{meal.strInstructions}</p>
        </div>
    )
}

export default RecipeDetailPage;