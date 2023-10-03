import React from 'react'
import styles from './Selection.module.css'
import arrow1 from '../../assets/arrow.png'
import c1 from '../../assets/s1.png'
import c2 from '../../assets/s2.png'
import c3 from '../../assets/s3.png'
import key from '../../assets/key.png'
import bulb from '../../assets/bulb.png'
import earth from '../../assets/earth.png'
import signup from '../../assets/signup.png'
import d1 from '../../assets/d1.png'
import d2 from '../../assets/d2.png'

export default function Selection() {
    return (
        <div className={styles.topCoderSelection}>
            <div className={styles.selectionHead}>
                <img src={arrow1} alt="" />
                <span>
                    <p>Criteria for Selection</p>
                    <p>We're looking for top coders who excel in the following areas:</p>
                </span>
            </div>
            <div className={styles.slider}>
                <img className={styles.d1} src={d1} alt="" />
                <div className={styles.card}>
                    <img className={styles.CC} src={c1} alt="" />
                    <img className={styles.key} src={bulb} alt="" />
                </div>
                <div className={styles.card}>
                    <img className={styles.CC} src={c2} alt="" />
                    <img className={styles.build} src={key} alt="" />
                </div>
                <div className={styles.card}>
                    <img className={styles.CC} src={c3} alt="" />
                    <img className={styles.algo} src={earth} alt="" />
                </div>
                <img src={d2} alt="" />
            </div>

            <div className={styles.heroBar}>
                <img src={signup} alt="" />
            </div>
        </div>
    )
}
