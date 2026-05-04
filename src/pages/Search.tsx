import { useSearchParams } from "react-router-dom";
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
}

export default SearchPage;