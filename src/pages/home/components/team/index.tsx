import React from "react";
import styles from "./index.module.css";
import Image from "./Image.tsx";
import firstImg from "./assets/first.png";
import secondImg from "./assets/second.png";
import thirdImg from "./assets/third.png";
import fourImg from "./assets/four.png";
import fiveImg from "./assets/five.png";
import sixImg from "./assets/six.png";
import sevenImg from "./assets/seven.png";
import eightImg from "./assets/eight.png";
export default function Team() {
  return (
    <div className={styles.meetChampions}>
      <div className={styles.textContainer}>
        <h1>MEET THE CHAMPIONS</h1>
        <h3>
          Explore the achievements of our past winners who have set the bar high
          with their exceptional coding skills.
        </h3>
      </div>

      <div className={styles.championsContainer}>
        <div className={styles.row1}>
          <Image img={firstImg} name="John Doe" rank="1" />
        </div>
        <div className={styles.row2}>
          <Image img={secondImg} name="John Doe" rank="2" />
          <Image img={thirdImg} name="John Doe" rank="3" />
        </div>
        <div className={styles.row3}>
          <Image img={fourImg} name="John Doe" rank="4" />
          <Image img={fiveImg} name="John Doe" rank="5" />
          <Image img={sixImg} name="John Doe" rank="6" />
          <Image img={sevenImg} name="John Doe" rank="7" />

          <Image img={eightImg} name="John Doe" rank="8" />
        </div>
      </div>
    </div>
  );
}
