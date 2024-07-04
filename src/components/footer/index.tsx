import React from "react";
import styles from "./index.module.css";
import {
  Youtubelogo,
  Discordlogo,
  Twitterlogo,
  Facebooklogo,
  Instagramlogo,
} from "./assets/icons";
export const Footer = () => {
  return (
    <footer className={styles.topcodersFooter}>
      <div className={styles.tandcContainer}>
        <p>
          <a href="/termsandconditions">Terms of Use & Privacy Policy</a>
        </p>
        <p>
          <a href="/termsandconditions">User agreement</a>
        </p>
      </div>

      <div className={styles.socialsContainer}>
        <p>Find us on</p>
        <span className={styles.socials}>
          <a
            href="https://discord.com/invite/Jt7sv3chZP"
            target="_blank"
            rel="noreferrer"
          >
            
            <Discordlogo />
          </a>
          <a
            href="https://www.instagram.com/mulearn.official/"
            target="_blank"
            rel="noreferrer"
          >
            
            <Instagramlogo />
          </a>
          <a
            href="https://twitter.com/GtechMulearn"
            target="_blank"
            rel="noreferrer"
          >
            <Twitterlogo />
          </a>
          <a
            href="https://www.youtube.com/c/mulearn"
            target="_blank"
            rel="noreferrer"
          >
            <Youtubelogo />
          </a>
          <a
            href="https://www.facebook.com/gtechmulearn"
            target="_blank"
            rel="noreferrer"
          >
            <Facebooklogo />
          </a>
        </span>
      </div>

      <div className={styles.footerLogos}>
        <a
          href="https://startupmission.kerala.gov.in/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/ksum.png" alt="" />
        </a>
        <span className={styles.line}></span>
        <img src="/logo.png" alt="" />
        <span className={styles.line}></span>
        <a href="https://mulearn.org/" target="_blank" rel="noreferrer">
          <img src="/mulearn.png" alt="" />
        </a>
      </div>
    </footer>
  );
};
