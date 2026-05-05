import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type { MealsResponse } from "../types/recipe";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/Errors";
import { endpoints } from "../api/mealdb";
import RecipeCard from "../components/RecipeCard";

function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    const {data, loading, error} = useFetch<MealsResponse>(
        query
        ? endpoints.searchMeals(query)
        : null
    );

    if (loading) return <Spinner />
    if (error) return <ErrorMessage message={error} />

    const meals = data?.meals;

    return(
        <div className="page">
            <h2>Results for "{query}"</h2>
            {!meals ? (
                <p>No recipes found. Try a different search</p>
            ) : (
                <div className="grid">
                    {meals.map(meal => (
                        <RecipeCard key={meal.idMeal} meal={meal} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage;