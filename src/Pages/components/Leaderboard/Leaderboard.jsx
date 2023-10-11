import styles from "./Leaderboard.module.css";
import arrow from "../../assets/arrow.png";
import hacker from "../../assets/hacker.png";
import line from "../../assets/line.png";
import topBar from "../../assets/leadtopbg.png";

export default function Leaderboard({ leaderboard }) {
  return (
    <div className={styles.leaderboard}>
      <div className={styles.title}>
        <div className={styles.text}>
          <h1>
            The “<b>Top 100</b>” hunters
          </h1>
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
            <div className={styles.list}>
              <div className={styles.rankList}>
                {leaderboard.slice(0,4).map((item, index) => (
                  <div key={index} className={styles.card}>
                    {/* <img className={styles.profileImg} src="" alt="img" /> */}
                    <div className={styles.cardContent}>
                      <div className={styles.head}>
                        <div>
                          <p>Rank {item.rank}</p>
                          <p>
                            {item.first_name} {item.last_name}
                          </p>
                        </div>
                        {/* <div className={styles.point}>
                          <span></span>
                          <p>+3</p>
                        </div> */}
                      </div>
                      <ul className={styles.content}>
                        <li>
                          College: <br /> {item.org_title}
                        </li>
                        <li>District: {item.district_name}</li>
                        <li>State: {item.state_name}</li>
                        <li style={{ color: "#00A2E8" }}>
                          Karma: {item.total_karma}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <span className={styles.bottom}></span>
            </div>
          </div>
          <span className={styles.bottom}></span>
        </div>
      </div>
    </div>
  );
}
