import { Link } from "react-router-dom";
import type { MealSummary } from "../types/recipe";
import { useFavorites } from "../context/FavoritesContext";

interface RecipeCardProps {
    meal: MealSummary;
    showFavorite?: boolean;
}

function RecipeCard({ meal, showFavorite = true }: RecipeCardProps) {
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    const favorited = isFavorite(meal.idMeal);

    const handleFavoriteClick = (e: React.MouseEvent) => {
        // STOP CLICK FROM NAVIGATING VIA PARENT LINK
        e.preventDefault();
        e.stopPropagation();
        favorited ? removeFavorite(meal.idMeal) : addFavorite(meal.idMeal)
    };

    return (
        <Link to={`/recipe/${meal.idMeal}`}>
            <div>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                {showFavorite && (
                    <button onClick={handleFavoriteClick} >
                        {favorited ? "Favorited" : "Not Favorited"}
                    </button>
                )}
            </div>
            <div>
                <h3>{meal.strMeal}</h3>
            </div>
        </Link>
    )
}

export default RecipeCard;