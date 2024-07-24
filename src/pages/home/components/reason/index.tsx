import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import bg from "./assets/textbg.png";
import card from "./assets/card.png";

const Reason: React.FC = () => {
  interface CardData {
    title: string;
    src: string;
  }

  const cardData: CardData[] = [
    { title: "Card 1", src: card },
    { title: "Card 2", src: card },
    { title: "Card 3", src: card },
    { title: "Card 4", src: card },
    { title: "Card 5", src: card },
    { title: "Card 6", src: card },
  ];

  const [showAll, setShowAll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia("(min-width: 680px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 680px)");
    const handleMediaQueryChange = (e: MediaQueryListEvent) =>
      setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  const handleViewMore = () => {
    setShowAll(!showAll);
  };

  const defaultImageCount = isDesktop ? 6 : 3;
  const shouldShowButton = cardData.length > defaultImageCount;

  return (
    <div className={styles.reasonContainer}>
      <div className={styles.textContainer}>
        <img src={bg} alt="" />
        <h1>WHY TOP 100 CODERS?</h1>
      </div>
      <div className={styles.cardsContainer}>
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

export default Reason;
