import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import type { MealDetail } from "../types/recipe";
import { endpoints } from "../api/mealdb";

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

                if(meal) {
                    fetchedMeals.push(meal);
                }
            }
            setMeals(fetchedMeals)
        }
        fetchFavorites();
    }, [favorites])
}

export default FavoritesPage;