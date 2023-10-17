import React from "react";
import styles from "./Navbar.module.css";
import top100 from "../../assets/top100logo.png";
import gtech from "../../assets/navgtech.png";
import kerala from '../../assets/kerala.png'
// import { useLocation } from "react-router-dom";

export default function Navbar() {
  const navbar = React.useRef(null);
  // const location = useLocation();
  // const path = location.pathname;

  React.useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navbar.current.style.top = "0";
      } else {
        navbar.current.style.top = "-150px";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <header>
      <div ref={navbar} className={styles.nav}>
        <img className={styles.top100Logo} src={top100} alt="logo" />
        <div className={styles.navLinks}>
          <a href="/">Home</a>
          <a href="/leaderboard">Top 100</a>
        </div>
        <div className={styles.navbarlinks}>
          <a href="https://startupmission.kerala.gov.in/" target="_blank" rel="noreferrer">
            <img className={styles.kerala} src={kerala} alt="" />
          </a>
          <a href="https://mulearn.org/" target="_blank" rel="noreferrer">
            <img className={styles.gtechLogo} src={gtech} alt="" />
          </a>
          <a
            href="https://huddleglobal.co.in/top100coders/"
            className={styles.registerButton}
          >
            <button className={styles.registerBtn}>Register</button>
          </a>
        </div>
      </div>
    </header>
  );
}
