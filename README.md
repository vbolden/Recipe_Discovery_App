# App Description

The Recipe Discovery application is a single-page React application (SPA) that allows users to explore recipes using data from the TheMealDB API. Users can browse recipe categories, search for meals by name, view detailed recipe instructions, and save favorite recipes for later. 

### Built with

- CSS custom properties
- [React](https://reactjs.org/) - JS library
- TypeScript
- React Router DOM
- Context API
- TheMealDB API

### Install & Run Locally

1. Clone the Repository
2. Install Dependencies (npm install)
3. Run the Server (npm run dev)

### Useful resources

- [React Router](https://reactrouter.com/) 
- [React Dev](https://react.dev/learn/passing-data-deeply-with-context) 
- [TheMealDB] (https://www.themealdb.com/api.php)

## Reflection

The most challenging part for me was the custom hooks because it's still new to me. Using them in simple applications was easy to understand but applying them to more complex applications with multiple pages and components was more difficult and confusing at times. I had AI assist me with synchronizing the favorites state with localStorage using the useLocalStorage custom hook, but anything I didn't understand I made sure to go back and look up an explanation. A design decision I made was to give the url in the useFetch hook a type annotation of string | null because on the RecipeDetailPage there is no url until the useParams is used and gives an ID, so the useParams might return undefined and cause errors and code bugs. 