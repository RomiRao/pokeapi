import axios from "axios";
import { useState } from "react";

export default function usePokemon() {
    const [data, setData] = useState([]);

    // let arrayFetch = [];
    // fetch("https://pokeapi.co/api/v2/pokemon")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         arrayFetch = data.results.map((poke) => fetch(poke.url));
    //         Promise.all(arrayFetch).then((pokemon) => {
    //             Promise.all(pokemon.map((poke) => poke.json())).then(
    //                 (data) => {
    //                     setPokemons(data);
    //                 }
    //             );
    //         });
    //     });

    const getPokemons = async () => {
        try {
            const arrayURLS = await axios("https://pokeapi.co/api/v2/pokemon");
            const arrayFetch = await Promise.all(
                arrayURLS.data.results.map((poke) => axios(poke.url))
            );

            setData(arrayFetch.map((pokemon) => pokemon.data));
        } catch {
            console.log(
                "lastima no funciono, suerte la prox, segui participando reina"
            );
        }
    };

    const getPokemon = async (id) => {
        try {
            const info = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);

            setData(info.data);
        } catch {
            console.log(
                "lastima no funciono, suerte la prox, segui participando reina"
            );
        }
    };

    return { data, getPokemons, getPokemon };
}
