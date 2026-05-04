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

    if(loading) return <Spinner />;
    if(error) return <ErrorMessage message={error} />
}

export default CategoryPage;