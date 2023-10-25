import React from "react";
import Navbar from "../components/Navbar/Navbar";
import styles from "./About.module.css";
import card from "../assets/card.png";
import cash from "../assets/cash.webp";
import topBorder from "../assets/pseudo.webp";

import iedcwhite from "../assets/about/iedcwhite.webp";
import ieeekswhite from "../assets/about/ieeekswhite.webp";
import kkemwhite from "../assets/about/kkemwhite.webp";
import natanawhite from "../assets/about/natanawhite.webp";
import ksumwhite from "../assets/about/ksumwhite.webp";
import technoparkwhite from "../assets/about/technoparkwhite.webp";

import imgone from "../assets/about/imgone.webp";
import imgtwo from "../assets/about/imgtwo.webp";
import imgthree from "../assets/about/imgthree.webp";
import imgfour from "../assets/about/imgfour.webp";
import imgfive from "../assets/about/imgfive.webp";
import imgsix from "../assets/about/imgsix.webp";
import imgseven from "../assets/about/imgseven.webp";
import imgeight from "../assets/about/imgeight.webp";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
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
      <div className={styles.partnersContainer}>
        <p className={styles.partnersHeading}>Our Partners</p>

        <div>
          <img src={iedcwhite} alt="" className={styles.partnerwhite} />
          <img src={ieeekswhite} alt="" className={styles.partnerwhite} />
          <img src={kkemwhite} alt="" className={styles.partnerwhite} />
          <img src={natanawhite} alt="" className={styles.partnerwhite} />
          <img src={technoparkwhite} alt="" className={styles.partnerwhite} />
          <img src={ksumwhite} alt="" className={styles.partnerwhite} />
        </div>
      </div>

      <p className={styles.storyHeading}>Mr.Mu & Top 100 Coders</p>
      <div className={styles.instagramPosts}>
        <img src={imgone} alt="" className={styles.instagramImage} />
        <img src={imgtwo} alt="" className={styles.instagramImage} />
        <img src={imgthree} alt="" className={styles.instagramImage} />
        <img src={imgfour} alt="" className={styles.instagramImage} />
        <img src={imgfive} alt="" className={styles.instagramImage} />
        <img src={imgsix} alt="" className={styles.instagramImage} />
        <img src={imgseven} alt="" className={styles.instagramImage} />
        <img src={imgeight} alt="" className={styles.instagramImage} />
      </div>

      <Footer />
    </>
  );
};

export default About;
