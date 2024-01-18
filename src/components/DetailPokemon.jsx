import usePokemon from "../hooks/usePokemon";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import pokeballClose from "../assets/pokeballClose.svg";
import pokeballOpen from "../assets/pokeballOpen.svg";

export default function DetailCharacter() {
    const { data, getPokemon } = usePokemon();
    const { addFavs, delFavs, isFavs } = useContext(FavoritesContext);
    const params = useParams();

    useEffect(() => {
        getPokemon(params.idPokemon);
    }, []);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <h2>{data.name}</h2>
            {isFavs(data.id) ? (
                <img
                    alt="pokeball"
                    onClick={(e) => delFavs(e, data.id)}
                    style={{ width: "30px" }}
                    src={pokeballOpen}
                />
            ) : (
                <img
                    alt="pokeball"
                    onClick={(e) => addFavs(e, data)}
                    style={{ width: "30px" }}
                    src={pokeballClose}
                />
            )}
            <div style={{ display: "flex" }}>
                <img
                    src={data.sprites?.other.home.front_default}
                    alt="pokemon"
                    style={{ width: "200px" }}
                />
                <h3>Types</h3>
                <ul>
                    {data.types?.map((type) => (
                        <li key={type.type.name}>{type.type.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
