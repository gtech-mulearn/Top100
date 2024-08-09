import styles from "./index.module.css"
import roadmap from "./assets/roadmap2.svg"
export default function Participate() {
  return (
    <div className={styles.participateContainer}>
        <h1>HOW TO PARTICIPATE?</h1>
        <img src={roadmap} alt="" />
    </div>
  )
}
