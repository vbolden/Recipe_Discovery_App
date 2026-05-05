import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import type { MealDetail } from "../types/recipe";
import { endpoints } from "../api/mealdb";
import RecipeCard from "../components/RecipeCard";

function FavoritesPage() {
    const { favorites, removeFavorite } = useFavorites();
    const [meals, setMeals] = useState<MealDetail[]>([]);

    

    // FETCH DETAILS FOR EACH MEAL ID
    useEffect(() => {
        if (favorites.length === 0) {
            setMeals([]);
            return;
        }

        async function fetchFavorites() {
            const fetchedMeals: MealDetail[] = [];

            for (const id of favorites) {
                const response = await fetch(
                    endpoints.recipeDetails(id)
                );
                const data = await response.json();

                const meal = data.meals?.[0];

                if (meal) {
                    fetchedMeals.push(meal);
                }
            }
            setMeals(fetchedMeals)
        }
        fetchFavorites();
    }, [favorites]);

    return (
        <div className="page">
            <h2>Your Favorite Recipes</h2>
            {favorites.length === 0 ?
                <p>You haven't saved any recipes yet. <Link to="/" >Browse categories</Link></p>
                : <div className="grid">
                    {meals.map(meal => (
                        <div key={meal.idMeal} className="recipe-card">
                            <RecipeCard key={meal.idMeal} meal={meal} />
                            <button onClick={() => removeFavorite(meal.idMeal)} >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>}
        </div>
    )
}

export default FavoritesPage;