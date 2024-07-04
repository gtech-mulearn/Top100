import React from "react";
import styles from "./index.module.css";
import bg from "./assets/textbg.png"
export default function TandC() {
  return (
    <div className={styles.tandcContainer}>
      <div className={styles.headsContainer}>
        <h1>TERMS & CONDITIONS</h1>
        <h3>TAGLINE</h3>
      </div>
      <div className={styles.contentContainer}>
        <p>Figma ipsum component variant main layer. Subtract asset team polygon
        figjam style content select editor. Connection text horizontal vertical
        outline scrolling pen move hand community. Figjam group duplicate
        scrolling vertical flows community content. Arrow stroke align slice
        polygon background library. Rotate layout strikethrough object rotate
        strikethrough rectangle move device text. Arrow shadow edit move stroke
        italic pen main. Content distribute mask union opacity underline fill. <br /><br />
        Select hand undo overflow export project. Thumbnail overflow clip
        thumbnail star bullet font asset. Stroke team link rotate auto object
        selection. Font group bold union pen polygon. Main main layer mask
        strikethrough arrange. Group share inspect layer component vertical
        effect fill selection. Distribute team outline reesizing bullet italic
        vertical. Ellipse shadow inspect content effect. Distribute content
        distribute create component figma font slice vertical select. Asset
        figma bullet draft content align variant. Bullet prototype group draft
        pencil selection draft main underline hand. Star move mask.
        </p>
      </div>
      <div className={styles.pandpContainer}>
        <img src={bg} alt="" />
        <h2>PRIVACY POLICY</h2>
      </div>
    </div>
  );
}
