import React from 'react'
import styles from './Challenge.module.css'
import today from '../../assets/todays.png'
import bottom from '../../assets/bg-bottom.png'

export default function Challenge() {
    return (
        <div className={styles.challenge}>
            <img className={styles.heading} src={today} alt="" />
            <p className={styles.content}>
                THIS S THE SPACE FOR TODAY’s CHALLENGE. WRITE AND DUMP ANY DAILY CHALLENGE HERE.
                Yeah this is the space for it. THIS S THE SPACE FOR TODAY’s CHALLENGE.
                WRITE AND DUMP ANY DAILY CHALLENGE HERE. Yeah this is the space for it.
                THIS S THE SPACE FOR TODAY’s CHALLENGE. WRITE AND DUMP ANY DAILY CHALLENGE HERE.
                Yeah this is the space for it. THIS S THE SPACE FOR TODAY’s CHALLENGE.
                WRITE AND DUMP ANY DAILY CHALLENGE HERE. Yeah this is the space for it.
            </p>
            <img className={styles.bottom} src={bottom} alt="" />
        </div>
    )
}
