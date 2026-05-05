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
        <div className="page">
            <h1>Recipe Categories</h1>
            <div className="grid">
                {data?.categories.map(category => (
                    <Link key={category.id}
                    to={`/category/${category.strCategory}`} >
                        <div className="recipe-card">
                            <img src={category.strCategoryThumb} alt={category.strCategory} />
                            <div className="recipe-content">
                                <h3>{category.strCategory}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HomePage;