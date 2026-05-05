import { Link } from "react-router-dom";
import type { MealSummary } from "../types/recipe";
import { useFavorites } from "../context/FavoritesContext";

interface RecipeCardProps {
    meal: MealSummary;
}

function RecipeCard({meal}: RecipeCardProps) {
    const {isFavorite, addFavorite, removeFavorite} = useFavorites();
    const favorited = isFavorite(meal.idMeal);

    const handleFavoriteClick = (e: React.MouseEvent) => {
        // STOP CLICK FROM NAVIGATING VIA PARENT LINK
        e.preventDefault();
        e.stopPropagation();
        favorited ? removeFavorite(meal.idMeal) : addFavorite(meal.idMeal)
    };

    
}

export default RecipeCard;