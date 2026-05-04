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

export function FavoritesProvider({children}: {children: React.ReactNode}) {
    const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);

    const addFavorite = (id: string) => {
        setFavorites([...favorites, id]);
    };

    const removeFavorite = (id: string) => {
        setFavorites(favorites.filter(favId => favId !== id));
    };

    
}