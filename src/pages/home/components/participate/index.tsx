import styles from "./index.module.css";
import roadmap from "./assets/roadmap2.svg";
export default function Participate() {
  return (
    <div className={styles.participateContainer}>
      <h1>HOW TO PARTICIPATE?</h1>
      <div className={styles.stepsContainer}>
        <img src={roadmap} alt="" />
        <div className={`${styles.step} ${styles.step1}`}>
          <div className={styles.content}>
            Welcome to the Top 100 Coders initiative Recognised by Kerala Govt.
            We're on a mission to recognize and empower the best coders in
            India. If you're passionate about coding and want to make a
            significant impact in the tech community, you're in the right place.
          </div>
          <div className={styles.title}></div>
        </div>
        <div className={`${styles.step} ${styles.step2}`}>
          <div className={styles.title}></div>
          <div className={styles.content}>
            Welcome to the Top 100 Coders initiative Recognised by Kerala Govt.
            We're on a mission to recognize and empower the best coders in
            India. If you're passionate about coding and want to make a
            significant impact in the tech community, you're in the right place.
          </div>
          
        </div>
        <div className={`${styles.step} ${styles.step3}`}>
          
          <div className={styles.content}>
            Welcome to the Top 100 Coders initiative Recognised by Kerala Govt.
            We're on a mission to recognize and empower the best coders in
            India. If you're passionate about coding and want to make a
            significant impact in the tech community, you're in the right place.
          </div>
          <div className={styles.title}></div>
        </div>
        <div className={`${styles.step} ${styles.step4}`}>
          <div className={styles.title}></div>
          <div className={styles.content}>
            Welcome to the Top 100 Coders initiative Recognised by Kerala Govt.
            We're on a mission to recognize and empower the best coders in
            India. If you're passionate about coding and want to make a
            significant impact in the tech community, you're in the right place.
          </div>
          
        </div>
        <div className={`${styles.step} ${styles.step5}`}>
          
          <div className={styles.content}>
            Welcome to the Top 100 Coders initiative Recognised by Kerala Govt.
            We're on a mission to recognize and empower the best coders in
            India. If you're passionate about coding and want to make a
            significant impact in the tech community, you're in the right place.
          </div>
          <div className={styles.title}></div>
        </div>
      </div>
    </div>
  );
}
