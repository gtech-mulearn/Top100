import { useState, useRef } from "react";
import styles from "./index.module.css";
import mulearn from "./assets/mulearnlogo.png";
import separator from "./assets/separator.png";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const navbar = useRef<HTMLDivElement>(null);
  // const location = useLocation();
  // const path = location.pathname;

  let prevScrollpos: number = window.pageYOffset;
  window.onscroll = function (): void {
    const currentScrollPos: number = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      if (navbar.current) {
        navbar.current.style.top = "0";
      }
    } else {
      if (navbar.current) {
        navbar.current.style.top = "-150px";
      }
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
        <img className={styles.top100Logo} src="/logo.png" alt="logo" />
        <div className={styles.navLinks}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="">Join Now</a>
        </div>

        <div className={styles.navbarlinks}>
          <a
            href="https://startupmission.kerala.gov.in/"
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.kerala} src="/ksum.png" alt="" />
          </a>
          <img src={separator} alt="" />
          <a href="https://mulearn.org/" target="_blank" rel="noreferrer">
            <img className={styles.gtechLogo} src={mulearn} alt="" />
          </a>
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
                <button className={styles.registerBtn2}>Join Now</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
