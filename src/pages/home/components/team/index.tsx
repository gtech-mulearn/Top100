import styles from "./index.module.css";
import Image from "./Image.tsx";
import firstImg from "./assets/first.png";
import fellow1 from "./assets/fellow1.png";
import fellow2 from "./assets/fellow2.png";
import fellow3 from "./assets/fellow3.png";
import fellow4 from "./assets/fellow4.png";
import fellow5 from "./assets/fellow5.png";
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
          <Image img={firstImg} name="John Doe" rank="1" />
          <h1 className={styles.rank1Header}>TOP 100 CODER</h1>
        </div>
        <div className={styles.bgContainer}>
        </div>
        <h1 className={styles.meetFellowHead}>MEET THE FELLOWS</h1>
        <div className={styles.row2}>
          <Image img={fellow1} name="John Doe" rank="2" />
          <Image img={fellow2} name="John Doe" rank="3" />
          <Image img={fellow3} name="John Doe" rank="4" />
          <Image img={fellow4} name="John Doe" rank="5" />
          <Image img={fellow5} name="John Doe" rank="6" />
          <Image img={fellow1} name="John Doe" rank="2" />
          <Image img={fellow2} name="John Doe" rank="3" />
          <Image img={fellow3} name="John Doe" rank="4" />
          <Image img={fellow4} name="John Doe" rank="5" />
          <Image img={fellow5} name="John Doe" rank="6" />
          <Image img={fellow1} name="John Doe" rank="2" />
          <Image img={fellow2} name="John Doe" rank="3" />
          <Image img={fellow3} name="John Doe" rank="4" />
          <Image img={fellow4} name="John Doe" rank="5" />
          <Image img={fellow5} name="John Doe" rank="6" />
        </div>
      </div>
    </div>
  );
}
