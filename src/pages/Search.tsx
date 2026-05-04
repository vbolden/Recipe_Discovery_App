import { useSearchParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type { MealsResponse } from "../types/recipe";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/Errors";
import { endpoints } from "../api/mealdb";

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
        <div>
            <h2>Results for "{query}"</h2>
            {!meals ? (
                <p>No recipes found. Try a different search</p>
            ) : (
                <div>
                    {meals.map(meal => (
                        <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`} >
                            <div className="recipe-card">
                                <img src={meal.strMealThumb} alt={meal.idMeal} />
                                <h4>{meal.strMeal}</h4>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage;