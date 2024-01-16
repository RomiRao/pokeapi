import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Pokemon API</h1>
      {/* <Link to={""}>Types Pokemon</Link> */}
    </div>
  );
}
