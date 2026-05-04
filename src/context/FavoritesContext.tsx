import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type FavoritesContextType = {
    favorites: string[];    // ARRAY OF MEAL IDS
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
    undefined
);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);

    // FUNCTION TO ADD FAVORITES
    const addFavorite = (id: string) => {
        setFavorites([...favorites, id]);
    };

    // FUNCTION TO REMOVE FAVORITES
    const removeFavorite = (id: string) => {
        setFavorites(favorites.filter(favId => favId !== id));
    };

    // FUNCTION TO CHECK IF MEAL ID EXISTS IN FAVORITES ARRAY
    const isFavorite = (id: string): boolean => {
        return favorites.includes(id);
    };

    return (
        <FavoritesContext.Provider
        value={{favorites, addFavorite, removeFavorite, isFavorite}} >
            {children}
        </FavoritesContext.Provider>
    )
}

// CUSTOM HOOK TO THROW AN ERROR IF HOOK IS USED OUTSIDE THE PROVIDER
export function useFavorites(): FavoritesContextType {
    const context = useContext(FavoritesContext);
    if(!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider')
    } 
    return context
}