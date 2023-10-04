import React from 'react'
import styles from './Navbar.module.css'
import top100 from '../../assets/top100logo.png'
import gtech from '../../assets/gtech.webp'

export default function Navbar() {
    const navbar = React.useRef(null)

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
        }
    }, [])

    return (
        <header>
            <div ref={navbar} className={styles.nav}>
                <img className={styles.top100Logo} src={top100} alt="logo" />
                <div className={styles.navLinks}>
                    <a href="#home">Home</a>
                    <a href="">Top 100</a>
                    <a href="#about">About</a>
                </div>
                <a href="https://mulearn.org/" target='_blank' rel="noreferrer"><img className={styles.gtechLogo} src={gtech} alt="" /></a>
            </div>
        </header>
    )
}
