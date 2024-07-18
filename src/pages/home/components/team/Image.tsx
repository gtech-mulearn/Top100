import React from "react";
import styles from "./index.module.css";
import "./image.css";

interface ImageProps {
  img: string;
  name: string;
  rank: string;
}

const Image: React.FC<ImageProps> = ({ img, name,rank }) => {
  return (
    <div className={styles.imageCard}>
      <img src={img} alt="" />
      <h1>{name}</h1>
      <div className={styles.rankContainer} id={`rank${rank}`}>
        <h2>#{rank}</h2>
        <h3>RANK</h3>
      </div>
    </div>
  );
};

export default Image;
