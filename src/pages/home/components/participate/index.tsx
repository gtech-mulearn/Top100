import styles from "./index.module.css"
import roadmap from "./assets/roadmap.svg"
export default function Participate() {
  return (
    <div className={styles.participateContainer}>
        <img src={roadmap} alt="" />
        <h1>HOW TO PARTICIPATE?</h1>
    </div>
  )
}
