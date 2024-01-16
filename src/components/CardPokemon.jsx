import React from "react";
import styles from "./cardPokemon.module.css";
import { FaRegStar, FaStar } from "react-icons/fa"; // Iconos favoritos
import { useNavigate } from "react-router-dom";

export default function CardPokemon({ name, image, id }) {
    const navigate = useNavigate();
    return (
        <div
            className={styles.card}
            onClick={() => navigate(`/detailPokemon/${id}`)}
        >
            {/* <FaRegStar />
      <FaStar /> */}
            <h2>{name}</h2>
            <img src={image} alt="pokemon" />
            {/* TYPES? */}
        </div>
    );
}
