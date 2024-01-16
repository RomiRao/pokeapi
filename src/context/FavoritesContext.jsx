import { createContext, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavs = (pokemon) => {
        setFavorites(pokemon);
    };

    const delFavs = (id) => {
        setFavorites(favorites.filter((pokemon) => pokemon.id !== id));
    };

    const data = {
        favorites,
        addFavs,
        delFavs,
    };

    return (
        <FavoritesContext.Provider value={data}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;
