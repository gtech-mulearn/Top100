import React from "react";
import styles from "./index.module.css";

interface CardProps {
  background: string;
  avatar: string;
  text: string;
  author: string;
}

const Card: React.FC<CardProps> = ({ background, avatar, text, author }) => {
  return (
    <div className={styles.testimonialCard}>
      <img src={background} alt="" className={styles.bgImg} />
      <div className={styles.contents}>
        <div className={styles.avatarContainer}>
          <img src={avatar} alt="" />
        </div>
        <div className={styles.textContainer}>
          <p>{text}</p>
          <h3>- {author}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
