import styles from "./index.module.css";
import { partners } from "./data.ts";
// import Marquee from "react-fast-marquee";
export default function Partners() {
  return (
    <div className={styles.partnersContainer}>
      <h1 className={styles.partnersHeading}>Our Partners</h1>
      <div className={styles.partnerImgContainer}>
        {/* <Marquee> */}
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner.src}
            alt={partner.name}
            className={styles.partnerwhite}
          />
        ))}
        {/* </Marquee> */}
      </div>
    </div>
  );
}
