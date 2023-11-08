import styles from "./board.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import arrow from "../assets/arrow.png";
import hacker from "../assets/hacker.png";
import line from "../assets/line.png";
import topBar from "../assets/leadtopbg.png";
import pic from "../assets/dpm.webp";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [invalidAvatars, setInvalidAvatars] = useState([]);

  useEffect(() => {
    fetch("https://mulearn.org/api/v1/top100/leaderboard/")
      .then((response) => response.json())
      .then((data) => {
        const leaderboardData = data.response;

        // Check the validity of profile_pic URLs
        leaderboardData.forEach(async (item) => {
          const imagePath = item.profile_pic;

          try {
            await axios.get(imagePath);
          } catch (error) {
            setInvalidAvatars((invalid) => [...invalid, item.profile_pic]);
          }
        });

        setLeaderboard(leaderboardData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.board}>
      <Navbar />
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
              Running the command for leaderboard <br />
              <p className={styles.typewriter} style={{ color: "#00A2E8" }}>
                -leaderboard/reveal.
              </p>
            </p>
            <img className={styles.line} src={line} alt="" />
            <img className={styles.hacker} src={hacker} alt="" />
          </div>

          <div className={styles.list}>
            <div className={styles.rankList}>
              {leaderboard.map((item, index) => (
                <div key={index} className={styles.card}>
                  <img
                    className={styles.profileImg}
                    src={
                      invalidAvatars.includes(item.profile_pic)
                        ? pic // Use a placeholder if the avatar is invalid
                        : item.profile_pic
                    }
                    alt="img"
                  />
                  <div className={styles.cardContent}>
                    <div className={styles.head}>
                      <div className={styles.name}>
                        <p>Rank {index + 1}</p>
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
                      {item.org && <li>Organization: {item.org}</li>}
                      {item.dis && <li>District: {item.dis}</li>}
                      {item.state && <li>State: {item.state}</li>}
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
      </div>
      <Footer />
    </div>
  );
}
