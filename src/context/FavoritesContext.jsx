import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
    const { get, set } = useLocalStorage();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        get("favs") ? setFavorites(get("favs")) : setFavorites([]);
    }, []);

    const addFavs = (e, pokemon) => {
        e.stopPropagation();
        setFavorites([...favorites, pokemon]);
        set("favs", [...favorites, pokemon]);
    };

    const delFavs = (e, id) => {
        e.stopPropagation();
        setFavorites(favorites.filter((pokemon) => pokemon.id !== id));
        set(
            "favs",
            favorites.filter((pokemon) => pokemon.id !== id)
        );
    };

    const isFavs = (id) => {
        console.log(favorites);
        return favorites.some((pokemon) => pokemon.id === id);
    };

    const data = {
        favorites,
        addFavs,
        delFavs,
        isFavs,
    };

    return (
        <FavoritesContext.Provider value={data}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;
