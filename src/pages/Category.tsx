import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type { MealsResponse } from "../types/recipe";
import { endpoints } from "../api/mealdb";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/Errors";

function CategoryPage() {
    const { categoryName } = useParams<{ categoryName: string }>();

    const { data, loading, error } = useFetch<MealsResponse>(
        categoryName
            ? endpoints.categoryMeals(categoryName)
            : null
    );

    if (loading) return <Spinner />;
    if (error) return <ErrorMessage message={error} />

    return (
        <div className="page">
            <h2>{categoryName}</h2>
            <div className="grid">
                {data?.meals?.map(meal => (
                    <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`} >
                        <div className="recipe-card">
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                            <h4>{meal.idMeal}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryPage;