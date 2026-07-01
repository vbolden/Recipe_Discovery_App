# fork & find — Recipe Discovery App

A modern recipe discovery web application that allows users to browse meals by category, search for recipes, view detailed recipe information, and save favorite dishes.

Built with React, TypeScript, and TheMealDB API.

---

## ✨ Features

### 🔎 Search Recipes
- Search recipes by name
- View matching recipe results
- Navigate directly to recipe details

### 🍽️ Browse Categories
- Explore recipes by food category
- View category-based recipe collections
- Responsive recipe card layout

### 📖 Recipe Details
- View full recipe information:
  - Recipe image
  - Category
  - Cuisine/area
  - Ingredients
  - Instructions
- Add or remove recipes from favorites

### ❤️ Favorites
- Save favorite recipes
- View all saved recipes
- Remove recipes from favorites

### 📱 Responsive Design
- Optimized for desktop and mobile screens
- Clean recipe-card based layout
- Modern food discovery aesthetic

---

## 🛠️ Technologies Used

### Frontend
- React
- TypeScript
- React Router DOM
- CSS3
- React Icons

### API
- TheMealDB API

### Tools
- Vite
- Git/GitHub

---

## 📸 Preview

### Home Page
![Home Page](./src./assets/homepage.png)

### Recipe Details
![Recipe Details](./src/assets/recipedetailspage.png)

### Favorites
![Favorites Page](./src/assets/favoritespage.png)

### Search Page
![Search Page](./src/assets/searchpage.png)

---

## 🚀 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/yourusername/recipe-discovery.git
```

Navigate into the project:

```bash
cd recipe-discovery
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

## 📁 Project Structure

```
src
│
├── api
│   └── mealdb.ts
│
├── components
│   ├── BackButton.tsx
│   ├── HomeButton.tsx
│   ├── RecipeCard.tsx
│   ├── Spinner.tsx
│   └── Errors.tsx
│
├── context
│   └── FavoritesContext.tsx
│
├── hooks
│   └── useFetch.ts
│
├── pages
│   ├── HomePage.tsx
│   ├── CategoryPage.tsx
│   ├── SearchPage.tsx
│   ├── FavoritesPage.tsx
│   └── RecipeDetailPage.tsx
│
├── types
│   └── recipe.ts
│
└── App.tsx
```

---

## 🔗 API

This project uses **TheMealDB API** to retrieve recipe data.

API provides:
- Meal categories
- Recipe searches
- Recipe details
- Ingredient information

---

## 🎨 Design Features

The application uses:
- Custom CSS variables
- Serif display typography
- Responsive grid layouts
- Hover animations
- Card-based UI
- Clean recipe-focused styling

---

## 🧠 What I Learned

While building this project, I practiced:

- Building reusable React components
- Managing application state with Context API
- Fetching and displaying external API data
- Using React Router for navigation
- Creating responsive layouts with CSS Grid
- Organizing a scalable React project structure

---

## 🔮 Future Improvements

Possible future additions:

- User accounts
- Recipe ratings
- Meal planning calendar
- Dark mode

---

## 👩‍💻 Author

Valerie Bolden

GitHub: https://github.com/vbolden
