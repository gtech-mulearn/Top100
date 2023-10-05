import React from 'react'
import styles from './TopCoders.module.css'

// Images import section
import heroBar from './assets/heroBar.webp'
import card from './assets/card.png'
import cash from './assets/cash.webp'
import topBorder from './assets/pseudo.webp'
import videoBg from './assets/vid.webm'

// Components import section
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Form from './components/Form/Form'
import Faq from './components/Faq/Faq'
import Selection from './components/Selection/Selection'
import Challenge from './components/Challenge/Challenge'

export default function TopCoders() {
    return (
        <div className={styles.topCoders}>
            <Navbar />

            <div id='home' className={styles.topCodersHero}>
                <video className={styles.renderVideo} autoPlay loop muted preload="auto">
                    <source src={videoBg} type="video/webm"></source>
                </video>
                <span className={styles.rect}></span>
                <span className={styles.rect}></span>
                <span className={styles.rect}></span>
                <div className={styles.heroBar}>
                    <img src={heroBar} alt="" />
                    <a href='#join'>Join the Top 100 Elite Squad</a>
                </div>
            </div>

            <div id='about' className={styles.topCodersContent}>
                <img className={styles.topBorder} src={topBorder} alt="" />
                <div className={styles.text}>
                    <div className={styles.textHead}>
                        <span className={styles.rect2}></span>
                        <h1>Be the top <b>100</b> of the year 2023</h1>
                        <span className={styles.rect2}></span>
                    </div>
                    <p className={styles.textContent}>Welcome to the Top 100 Coders initiative Recognised by Kerala Govt.
                        We're on a mission to recognize and empower the best coders in India.
                        If you're passionate about coding and want to make a significant
                        impact in the tech community, you're in the right place.</p>
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
            <Form />
            <Faq />
            <Footer />
        </div>
    )
}
