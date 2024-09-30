<<<<<<< HEAD
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
          Sign up to be part of the Top 100 Coders initiative and kickstart your journey toward becoming one of the best coders in India.

          </div>
          <div className={styles.title}></div>
        </div>
        <div className={`${styles.step} ${styles.step2}`}>
          <div className={styles.title}></div>
          <div className={styles.content}>
          Connect with the GTech µLearn community on Discord for resources, mentorship, and collaboration.
          </div>
          
        </div>
        <div className={`${styles.step} ${styles.step3}`}>
          
          <div className={styles.content}>
          Link your Discord account to the initiative to stay updated with announcements, events, and challenges.
          </div>
          <div className={styles.title}></div>
        </div>
        <div className={`${styles.step} ${styles.step4}`}>
          <div className={styles.title}></div>
          <div className={styles.content}>
          Secure your place in the competition by verifying your digital identity, ensuring a seamless participation process.
          </div>
          
        </div>
        <div className={`${styles.step} ${styles.step5}`}>
          
          <div className={styles.content}>
          Start competing in coding challenges, collaborate with peers, and showcase your skills to make your mark in the Top 100 Coders.
          </div>
          <div className={styles.title}></div>
        </div>
      </div>
=======
import styles from "./index.module.css"
import roadmap from "./assets/roadmap2.svg"
export default function Participate() {
  return (
    <div className={styles.participateContainer}>
        <h1>HOW TO PARTICIPATE?</h1>
        <img src={roadmap} alt="" />
>>>>>>> a6bb45d871e2a22f615b732d8e654b274c67561a
    </div>
  );
}
