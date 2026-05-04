
const baseUrl = "https://www.themealdb.com/api/json/v1/1/";

export const endpoints = {
    categories: `${baseUrl}/categories.php`,
    categoryMeals: (category: string) => `${baseUrl}/filter.php?c=${category}`,
    recipeDetails: (id: string) =>  `${baseUrl}/lookup.php?i=${id}`,
    searchMeals: (query: string) => `${baseUrl}/search.php?s=${query}`,
}