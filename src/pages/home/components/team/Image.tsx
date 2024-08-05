import React from "react";
import styles from "./index.module.css";
import "./image.css";

interface ImageProps {
  img: string;
  name: string;
  github: string;
}

const Image: React.FC<ImageProps> = ({ img, name,github }) => {
  return (
    <a href={`https://github.com/${github}`} target="_blank" className={styles.imageCard}>
      <img src={img} alt="" />
      <h1>{name}</h1>
      {/* <div className={styles.rankContainer} id={`rank${rank}`}>
        <h2>#{rank}</h2>
        <h3>RANK</h3>
      </div> */}
    </a>
  );
};

export default Image;
