import React from 'react'
import styles from './Challenge.module.css'
import today from '../../assets/todays.png'
import bottom from '../../assets/bg-bottom.png'

export default function Challenge() {
    return (
        <div className={styles.challenge}>
            <img className={styles.heading} src={today} alt="" />
            <p className={styles.content}>
                For the first 30 days, you a
            </p>
            <img className={styles.bottom} src={bottom} alt="" />
        </div>
    )
}
