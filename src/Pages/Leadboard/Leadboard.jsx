import styles from './board.module.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import arrow from '../assets/arrow.png'
import hacker from '../assets/hacker.png'
import line from '../assets/line.png'
import topBar from '../assets/leadtopbg.png'

export default function Leaderboard() {
    return (
        <div className={styles.board}>
            <Navbar />
            <div className={styles.leaderboard}>
                <div className={styles.title}>
                    <div className={styles.text}>
                        <h1>The “<b>Top 100</b>” hunters</h1>
                        <p>The List of Elite, who are competing for the top 100 spot</p>
                    </div>
                    <img className={styles.arrow} src={arrow} alt="arrow" />
                </div>
                <div className={styles.container}>
                    <img className={styles.topBar} src={topBar} alt="" />
                    <span className={styles.left}></span>
                    <span className={styles.right}></span>
                    <div className={styles.top}>
                        <p className={styles.title}>
                            Welcome to the top 100 series... <br />
                            Run the command for leaderboard <br />
                            <p style={{ color: "#00A2E8" }}>-leadrbrd/reveal</p>
                        </p>
                        <img className={styles.line} src={line} alt="" />
                        <img className={styles.hacker} src={hacker} alt="" />
                    </div>

                    <div className={styles.list}>
                        <div className={styles.rankList}>
                            <div className={styles.card}>
                                <img className={styles.profileImg} src="" alt="img" />
                                <div className={styles.cardContent}>
                                    <div className={styles.head}>
                                        <div className={styles.name}>
                                            <p>Rank 1</p>
                                            <p>Anandha Krishnan S</p>
                                        </div>
                                        <div className={styles.point}>
                                            <span></span>
                                            <p>+3</p>
                                        </div>
                                    </div>
                                    <ul className={styles.content}>
                                        <li style={{ width: window.innerWidth < 600 ? "50%" : "100%" }}>
                                            College: St Joseeph's Pala gfgfgfhkdhgkj</li>
                                        <li>District: Kottayam</li>
                                        <li>State: Kerala</li>
                                        <li style={{ color: "#00A2E8" }}>Karma: 3200</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <span className={styles.bottom}></span>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}
