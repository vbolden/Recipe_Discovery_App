import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import type { MealDetail } from "../types/recipe";

function FavoritesPage() {
    const { favorites, removeFavorite } = useFavorites();
    const [meals, setMeals] = useState<MealDetail[]>([]);

    // FETCH DETAILS FOR EACH MEAL ID
    useEffect(() => {
        if (favorites.length === 0) {
            setMeals([]);
            return;
        }

        
    })
}

export default FavoritesPage;