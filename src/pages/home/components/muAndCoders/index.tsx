import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import bg from "./assets/textbg.png";
import card1 from "./assets/card1.webp";
import card2 from "./assets/card2.webp";
import card3 from "./assets/card3.webp";
import card4 from "./assets/card4.png";
import card5 from "./assets/card5.png";
import card6 from "./assets/card6.png";
import card7 from "./assets/card7.webp";
import card8 from "./assets/card8.webp";
const MuAndCoders: React.FC = () => {
  interface CardData {
    title: string;
    src: string;
  }

  const cardData: CardData[] = [
    { title: "Card 1", src: card1 },
    { title: "Card 2", src: card2 },
    { title: "Card 3", src: card3 },
    { title: "Card 4", src: card4 },
    { title: "Card 5", src: card5 },
    { title: "Card 6", src: card6 },
    { title: "Card 6", src: card7 },
    { title: "Card 6", src: card8 },
  ];

  const [showAll, setShowAll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia("(min-width: 770px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaQueryChange = (e: MediaQueryListEvent) =>
      setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  const handleViewMore = () => {
    setShowAll(!showAll);
  };

  const defaultImageCount = isDesktop ? 8 : 4;
  const shouldShowButton = cardData.length > defaultImageCount;

  return (
    <div className={styles.muAndCodersContainer}>
      <div className={styles.textWrapper}>
        <div className={styles.textContainer}>
          <img src={bg} alt="" />
          <h1>MR.MU AND TOP 100 CODERS</h1>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {cardData
          .slice(0, showAll ? cardData.length : defaultImageCount)
          .map((card, index) => (
            <img key={index} src={card.src} alt={card.title} />
          ))}
      </div>
      {shouldShowButton && (
        <div className={styles.btnContainer}>
          <button onClick={handleViewMore}>
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};
export default MuAndCoders;
