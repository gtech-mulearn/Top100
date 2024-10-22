import styles from "./index.module.css";
import videoBg from "./assets/bgvid.mp4";
import heroBar from "./assets/textbg.png";
import textbg from "./assets/action-bg.svg";
export default function Landing() {
  return (
    <div id="home" className={styles.topCodersHero}>
      <video className={styles.renderVideo} autoPlay loop muted preload="auto">
        <source src={videoBg} type="video/webm"></source>
      </video>
      <span className={styles.rect}></span>
      <span className={styles.rect}></span>
      <span className={styles.rect}></span>
      <div className={styles.heroBar}>
        <img src={heroBar} alt="" />
        <a
          href="https://airtable.com/appCAPOMQvpUnbWeb/pagIgGX2FBrG2OaUg/form"
          target="_blank"
          rel="noreferrer"
        >
          Join the Top 100 Elite Squad
        </a>
      </div>
      <div className={styles.actionbg}>
        <img src={textbg} alt="" />
      </div>
    </div>
  );
}
