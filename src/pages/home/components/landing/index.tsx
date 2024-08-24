import styles from "./index.module.css";
import videoBg from "./assets/bgvid.mp4";
import heroBar from "./assets/textbg.png";
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
          href="https://github.com/gtech-mulearn/Top-100-Coders"
          target="_blank"
          rel="noreferrer"
        >
          Join the Top 100 Elite Squad
        </a>
      </div>
    </div>
  );
}
