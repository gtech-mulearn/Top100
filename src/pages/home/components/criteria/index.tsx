import React from "react";
import styles from "./index.module.css";
import arrow1 from "./assets/arrow.png";
import c1 from "./assets/card-1.png";
import c2 from "./assets/card-2.png";
import c3 from "./assets/card-3.png";
import c4 from "./assets/card-4.png";
import c5 from "./assets/card-5.png";
import key from "./assets/keyboard.png";
import building from "./assets/building.png";
import db from "./assets/db.png";
import security from "./assets/security.png";
import earth from "./assets/earth.png";

export default function Criteria() {
  return (
    <div className={styles.topCoderSelection}>
      <div className={styles.selectionHead}>
        <img src={arrow1} alt="" />
        <span>
          <p>Criteria for Selection</p>
          <p>We're looking for top coders who excel in the following areas:</p>
        </span>
      </div>
      <div className={styles.slider}>
        <div className={styles.card}>
          <img className={styles.CC} src={c1} alt="" />
          <img className={styles.key} src={key} alt="" />
        </div>
        <div className={styles.card}>
          <img className={styles.CC} src={c2} alt="" />
          <img className={styles.build} src={building} alt="" />
        </div>
        <div className={styles.card}>
          <img className={styles.CC} src={c3} alt="" />
          <img className={styles.db} src={db} alt="" />
        </div>
        <div className={styles.card}>
          <img className={styles.CC} src={c4} alt="" />
          <img className={styles.earth} src={earth} alt="" />
        </div>
        <div className={styles.card}>
          <img className={styles.CC} src={c5} alt="" />
          <img className={styles.security} src={security} alt="" />
        </div>
      </div>
    </div>
  );
}
