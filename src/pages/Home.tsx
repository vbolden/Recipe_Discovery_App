import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type { CategoriesResponse } from "../types/recipe";
import { endpoints } from "../api/mealdb";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/Errors";

function HomePage() {
    const {data, loading, error} = useFetch<CategoriesResponse>(endpoints.categories);

    if(loading) return <Spinner />
    if(error) return <ErrorMessage message={error}  />

    return (
        <div>
            {data?.categories.map(category => (
                <Link key={category.id}
                to={`/category/${category.strCategory}`} >
                    <div>
                        <img src={category.strCategoryThumb} alt={category.strCategory} />
                        <h3>{category.strCategory}</h3>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default HomePage;