import React from "react";
import styles from "./Challenge.module.css";
import today from "../../assets/todays.png";
import bottom from "../../assets/bg-bottom.png";

export default function Challenge() {
  return (
    <div className={styles.challenge}>
      <img className={styles.heading} src={today} alt="" />
      <p className={styles.content}>
        To begin, you have to take on the challenges in the problem-solving
        section on HackerRank, to maintain a rank below 100,000 on the
        Hackerrank leaderboard. Additionally, ensure to regularly update your
        progress on Mulearn and receive around 20-10000 karma points to help you
        climb the Mulearn leaderboard and secure a position within the top 250.
        Maintain this status for the initial 30 days before transitioning to the
        daily challenges.
      </p>
      <img className={styles.bottom} src={bottom} alt="" />
    </div>
  );
}
