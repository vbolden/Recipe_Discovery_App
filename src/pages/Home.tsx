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
            <div className="page-header">
                <h1 className="title">What are you craving?</h1>
                <p className="subtitle">Browse by Category</p>
            </div>
            <div className="category-grid">
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