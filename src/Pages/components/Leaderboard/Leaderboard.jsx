import styles from './Leaderboard.module.css'
import arrow from '../../assets/arrow.png'
import hacker from '../../assets/hacker.png'
import line from '../../assets/line.png'

export default function Leaderboard() {
    return (
        <div className={styles.leaderboard}>
            <div className={styles.title}>
                <div className={styles.text}>
                    <h1>The “<b>Top 100</b>” hunters</h1>
                    <p>The List of Elite, who are competing for the top 100 spot</p>
                </div>
                <img className={styles.arrow} src={arrow} alt="arrow" />
            </div>
            <div className={styles.container}>
                <div className={styles.top}>
                    <p className={styles.title}>
                        Welcome to the top 100 series... <br />
                        Run the command for leaderboard <br />
                        <p style={{ color: "#00A2E8" }}>-leadrbrd/reveal</p>
                    </p>
                    <img className={styles.line} src={line} alt="" />
                    <img className={styles.hacker} src={hacker} alt="" />
                </div>
                <div className={styles.rankList}>
                    <div className={styles.card}>
                        <img className={styles.profileImg} src="" alt="img" />
                        <div className={styles.cardContent}>
                            <div className={styles.head}>
                                <p>Rank 1</p>
                                <p>Anandha Krishnan S</p>
                                <div className={styles.point}>
                                    <span></span>
                                    <p>+3</p>
                                </div>
                            </div>
                            <ul className={styles.content}>
                                <li>College: St Joseeph's Pala</li>
                                <li>District: Kottayam</li>
                                <li>State: Kerala</li>
                                <li style={{ color: "#00A2E8" }}>Karma: 3200</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img className={styles.profileImg} src="" alt="img" />
                        <div className={styles.cardContent}>
                            <div className={styles.head}>
                                <p>Rank 1</p>
                                <p>Anandha Krishnan S</p>
                                <div className={styles.point}>
                                    <span></span>
                                    <p>+3</p>
                                </div>
                            </div>
                            <ul className={styles.content}>
                                <li>College: St Joseeph's Pala</li>
                                <li>District: Kottayam</li>
                                <li>State: Kerala</li>
                                <li style={{ color: "#00A2E8" }}>Karma: 3200</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img className={styles.profileImg} src="" alt="img" />
                        <div className={styles.cardContent}>
                            <div className={styles.head}>
                                <p>Rank 1</p>
                                <p>Anandha Krishnan S</p>
                                <div className={styles.point}>
                                    <span></span>
                                    <p>+3</p>
                                </div>
                            </div>
                            <ul className={styles.content}>
                                <li>College: St Joseeph's Pala</li>
                                <li>District: Kottayam</li>
                                <li>State: Kerala</li>
                                <li style={{ color: "#00A2E8" }}>Karma: 3200</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img className={styles.profileImg} src="" alt="img" />
                        <div className={styles.cardContent}>
                            <div className={styles.head}>
                                <p>Rank 1</p>
                                <p>Anandha Krishnan S</p>
                                <div className={styles.point}>
                                    <span></span>
                                    <p>+3</p>
                                </div>
                            </div>
                            <ul className={styles.content}>
                                <li>College: St Joseeph's Pala</li>
                                <li>District: Kottayam</li>
                                <li>State: Kerala</li>
                                <li style={{ color: "#00A2E8" }}>Karma: 3200</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
