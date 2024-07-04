import styles from "./index.module.css";
import ict from "./assets/ictacademy.png";
import ieee from "./assets/ieee.png";
import keem from "./assets/keem.png";
import ksum from "./assets/ksum.png";
import techopark from "./assets/technopark.png";
import vatana from "./assets/vatana.png";
export default function Partners() {
  return (
    <div className={styles.partnersContainer}>
      <h1 className={styles.partnersHeading}>Our Partners</h1>

      <div className={styles.partnerImgContainer}>
        <img src={ict} alt="" className={styles.partnerwhite} />
        <img src={ieee} alt="" className={styles.partnerwhite} />
        <img src={keem} alt="" className={styles.partnerwhite} />
        <img src={vatana} alt="" className={styles.partnerwhite} />
        <img src={techopark} alt="" className={styles.partnerwhite} />
        <img src={ksum} alt="" className={styles.partnerwhite} />
      </div>
    </div>
  );
}
