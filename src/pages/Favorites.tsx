import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import type { MealDetail } from "../types/recipe";
import { endpoints } from "../api/mealdb";
import RecipeCard from "../components/RecipeCard";
import HomeButton from "../components/HomeButton";

function FavoritesPage() {
    const { favorites } = useFavorites();
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
            setMeals(fetchedMeals);
        }
        fetchFavorites();
    }, [favorites]);

    return (
        <div className="page">
            <HomeButton />

            <h2 className="favs-page">Your Favorite Recipes</h2>
            {favorites.length === 0 ?
                <div className="empty-state">
                    <div className="icon">🍽️</div>
                    <h2 className="title">No Favorites yet</h2>
                    <p className="sub">Browse categories and tap the heart to save recipe</p>
                    <Link to="/" className="link" >Browse categories</Link>
                </div>
                : <div className="grid">
                    {meals.map(meal => (
                        <RecipeCard key={meal.idMeal} meal={meal} />
                    ))}
                </div>}
        </div>
    );
}

export default FavoritesPage;