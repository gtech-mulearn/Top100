import React from "react";
import styles from "./Challenge.module.css";
import today from "../../assets/todays.png";
import bottom from "../../assets/bg-bottom.png";

export default function Challenge() {
  return (
    <div className={styles.challenge}>
      <img className={styles.heading} src={today} alt="" />
      <p className={styles.content}>
        To ascend the rankings and secure a spot within the top 100, you must
        conquer a series of problem-solving challenges over the course of the
        initial 30 days. Your path to success hinges on your adeptness in
        overcoming each task. Furthermore, by providing evidence of your
        achievements within the designated Discord server, you can 20 upto 10000
        Karma Points. The more you earn, the higher you climb.
      </p>
      <img className={styles.bottom} src={bottom} alt="" />
    </div>
  );
}
