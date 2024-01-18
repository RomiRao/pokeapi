import { useEffect } from "react";
import CardPokemon from "./CardPokemon";
import styles from "./containCardsPokemon.module.css";
import usePokemon from "../hooks/usePokemon";

export default function ContainCardsPokemon() {
    const { data, getPokemons } = usePokemon();

    useEffect(() => {
        getPokemons();
    }, []);

    //

    return (
        <div className={styles.containCard}>
            {/* Al utilizar promise.all enviar mas info a cada Card */}
            {data.map((pokemon) => {
                return <CardPokemon key={pokemon.name} pokemon={pokemon} />;
            })}
        </div>
    );
}
