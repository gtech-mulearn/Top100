import styles from "./index.module.css";
import Image from "./Image.tsx";
import { fellowData } from "./fellow.ts";
export default function Team() {
  return (
    <div className={styles.meetChampions}>
      <div className={styles.textContainer}>
        <h1>MEET THE CHAMPIONS</h1>
        <h3>
          Explore the achievements of our past winners who have set the bar high
          with their exceptional coding skills.
        </h3>
      </div>

      <div className={styles.championsContainer}>
        <div className={styles.row1}>
          <Image img={fellowData[0].img} name="John Doe" github={fellowData[0].github}/>
          <h1 className={styles.rank1Header}>TOP 100 CODER</h1>
        </div>
        <div className={styles.bgContainer}>
        </div>
        <h1 className={styles.meetFellowHead}>MEET THE FELLOWS</h1>
        <div className={styles.row2}>
      {fellowData.slice(1).map((data, index) => (
        <Image key={index} img={data.img} name={data.name} github={data.github} />
      ))}
    </div>
      </div>
    </div>
  );
}
