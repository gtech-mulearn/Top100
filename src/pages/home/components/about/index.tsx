import styles from "./index.module.css";
import topBorder from "./assets/topborder.png";
import cash from "./assets/cash.png";
import build from "./assets/build2.png";
import separator from "./assets/separator-bottom.png";
export default function About() {
  return (
    <>
      <div id="about" className={styles.topCodersContent}>
        <img className={styles.topBorder} src={topBorder} alt="" />
        <div className={styles.text}>
          <span className={styles.rect2}></span>
          <div className={styles.text2}>
            <div className={styles.text3}>
              <h1>
                About <b>TOP 100 </b>CODERS
              </h1>
              <p className={styles.textContent}>
                Welcome to the Top 100 Coders initiative Recognised by Kerala
                Govt. We're on a mission to recognize and empower the best
                coders in India. If you're passionate about coding and want to
                make a significant impact in the tech community, you're in the
                right place.
              </p>
              <div className={styles.prize}>
                <span>
                  <p>PRIZES</p>
                  <img src={cash} alt="" />
                </span>
                <p>WORTH ₹10,00,000</p>
              </div>
            </div>
          </div>
          <span className={styles.rect2}></span>
        </div>
        <img className={styles.card} src={build} alt="" />
      </div>
      <img className={styles.aboutSeparator} src={separator} alt="" />
    </>
  );
}
