import React, { useEffect, useState } from "react";
import styles from "./TopCoders.module.css";

// Images import section
import heroBar from "./assets/heroBar.webp";
import card from "./assets/card.png";
import cash from "./assets/cash.webp";
import topBorder from "./assets/pseudo.webp";
import videoBg from "./assets/newVid.webm";

// Components import section
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Faq from "./components/Faq/Faq";
import Selection from "./components/Selection/Selection";
import Challenge from "./components/Challenge/Challenge";
import Leaderboard from "./components/Leaderboard/Leaderboard";

export default function TopCoders() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch("https://mulearn.org/api/v1/top100/leaderboard/")
      .then((response) => response.json())
      .then((data) => setLeaderboard(data.response))
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className={styles.topCoders}>
      <Navbar />

      <div id="home" className={styles.topCodersHero}>
        <video
          className={styles.renderVideo}
          autoPlay
          loop
          // muted
          preload="auto"
        >
          <source src={videoBg} type="video/webm"></source>
        </video>

        {/* <span className={styles.rect}></span>
        <span className={styles.rect}></span>
        <span className={styles.rect}></span> */}
        <div className={styles.heroBar}>
          <img src={heroBar} alt="" />
          <a href="https://github.com/gtech-mulearn/Top-100-Coders#readme" target="_blank" rel="noreferrer">Join the Top 100 Elite Squad</a>
        </div>
      </div>

      <div id="about" className={styles.topCodersContent}>
        <img className={styles.topBorder} src={topBorder} alt="" />
        <div className={styles.text}>
          <div className={styles.textHead}>
            <span className={styles.rect2}></span>
            <h1>
              Be the top <b>100</b> of the year 2023
            </h1>
            <span className={styles.rect2}></span>
          </div>
          <p className={styles.textContent}>
            Welcome to the Top 100 Coders initiative Recognised by Kerala Govt.
            We're on a mission to recognize and empower the best coders in
            India. If you're passionate about coding and want to make a
            significant impact in the tech community, you're in the right place.
          </p>
          <div className={styles.prize}>
            <span>
              <p>PRIZES</p>
              <img src={cash} alt="" />
            </span>
            <p>WORTH ₹10,00,000</p>
          </div>
        </div>
        <img className={styles.card} src={card} alt="" />
      </div>

      <Challenge />
      <Selection />
      <Leaderboard leaderboard={leaderboard} />
      {/* <Form / */}
      <Faq />
      <Footer />
    </div>
  );
}
