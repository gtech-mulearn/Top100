import React, { useState } from "react";
import styles from "./Navbar.module.css";
import top100 from "../../assets/top100logo.png";
import gtech from "../../assets/navgtech.png";
import kerala from "../../assets/kerala.png";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const navbar = React.useRef(null);
  // const location = useLocation();
  // const path = location.pathname;

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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      <div className={styles.nav} ref={navbar}>
        <img className={styles.top100Logo} src={top100} alt="logo" />
        <div className={styles.navLinks}>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>

        <div className={styles.navbarlinks}>
          <a
            href="https://startupmission.kerala.gov.in/"
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.kerala} src={kerala} alt="" />
          </a>
          <a href="https://mulearn.org/" target="_blank" rel="noreferrer">
            <img className={styles.gtechLogo} src={gtech} alt="" />
          </a>
  
          <a
            href="https://github.com/gtech-mulearn/Top-100-Coders"
            className={styles.registerButton}
          >
            <button className={styles.registerBtn}>Participate Now</button>
          </a>

          {/* Mobile menu button */}
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className={styles.mobileMenu}>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a
                href="https://github.com/gtech-mulearn/Top-100-Coders"
                className={styles.registerButton}
              >
                <button className={styles.registerBtn2}>Participate Now</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
