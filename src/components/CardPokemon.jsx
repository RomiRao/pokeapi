import styles from "./cardPokemon.module.css";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import pokeballClose from "../assets/pokeballClose.svg";
import pokeballOpen from "../assets/pokeballOpen.svg";

export default function CardPokemon({ pokemon }) {
    const { addFavs, delFavs, isFavs } = useContext(FavoritesContext);

    const navigate = useNavigate();

    return (
        <div
            className={styles.card}
            onClick={() => navigate(`/detailPokemon/${pokemon.id}`)}
        >
            {isFavs(pokemon.id) ? (
                <img
                    alt="pokeball"
                    onClick={(e) => delFavs(e, pokemon.id)}
                    className={styles.img}
                    src={pokeballOpen}
                />
            ) : (
                <img
                    alt="pokeball"
                    onClick={(e) => addFavs(e, pokemon)}
                    className={styles.img}
                    src={pokeballClose}
                />
            )}

            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt="pokemon" />
            {/* TYPES? */}
        </div>
    );
}
