import usePokemon from "../hooks/usePokemon";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function DetailCharacter() {
    const { data, getPokemon } = usePokemon();
    const params = useParams();

    useEffect(() => {
        getPokemon(params.idPokemon);
    }, []);

    console.log(data);
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <h2>{data.name}</h2>
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
