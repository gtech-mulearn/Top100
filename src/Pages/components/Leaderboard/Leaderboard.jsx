import styles from "./Leaderboard.module.css";
import arrow from "../../assets/arrow.png";
import hacker from "../../assets/hacker.png";
import line from "../../assets/line.png";
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
          {leaderboard.slice(0, 4).map((data) => (
            <div className={styles.card} key={data.rank}>
              {/* <img
                className={styles.profileImg}
                src={`https://example.com/profile/${data.rank}`}
                alt="img"
              /> */}
              <div className={styles.cardContent}>
                <div className={styles.head}>
                  <p>Rank {data.rank}</p>
                  <p>
                    {data.first_name} {data.last_name}
                  </p>
                  {/* <div className={styles.point}>
                    <span></span>
                    <p>+3</p>
                  </div> */}
                </div>
                <ul className={styles.content}>
                  <li>College: {data.org_title}</li>
                  <li>District: {data.district_name}</li>
                  <li>State: {data.state_name}</li>
                  <li style={{ color: "#00A2E8" }}>
                    Karma: {data.total_karma}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
