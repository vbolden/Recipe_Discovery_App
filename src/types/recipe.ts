// CATEGORY SHAPE FROM API
export interface Category {
    id: string;
    strCategory: string;
    strCategoryThumb: string;
    description: string;
}

// MEAL SUMMARY FOR CATEGORY FILTER & SEARCH
export interface MealSummary {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

// FULL MEAL DETAIL RETURNED BY LOOKUP ENDPOINT
export interface MealDetail extends MealSummary {
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strYoutube: string;
    strSource: string;
    [key: string]: string | null; 
}