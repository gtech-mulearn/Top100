import styles from "./index.module.css";
import Marquee from "react-fast-marquee";
import Card1 from "./card1";
// import Card2 from "./card2";
import person2 from "./assets/person1.png";
import person3 from "./assets/person3.png";
// import person4 from "./assets/person4.png";
// import person5 from "./assets/person5.png";
import bg2 from "./assets/card1.png";
import bg3 from "./assets/card3.png";
// import bg4 from "./assets/card4.png";
// import bg5 from "./assets/card5.png";
export default function Testimonial() {
  interface CardData {
    bg: string;
    avatar: string;
    testimonial: string;
    author: string;
  }

  const cardData1: CardData[] = [
    {
      bg: bg2,
      avatar: person2,
      testimonial:
        "Top 100 Coders has been a fantastic experiment, bringing together the brightest minds and showcasing incredible energy and creativity. This initiative has been a tremendous success, and I am very eager to see the continued progress and achievements of our participants. Thank you to everyone involved for making this possible.",
      author: "Anoop Ambika, CEO, Kerala Startup Mission",
    },
    {
      bg: bg3,
      avatar: person3,
      testimonial:
        "I started my entrepreneurship journey at IN50HRS, and seeing the Top 100 Coders aspirants brings back memories of that exciting time. You have an incredible opportunity before you, a chance to shape your future and make a significant impact. Seize it and make the most of it.",
      author: "Ajeesh Achuthan, Founder of Open, Kerala's first Unicorn startup",
    },
    {
      bg: bg2,
      avatar: person2,
      testimonial:
        "Top 100 Coders has been a fantastic experiment, bringing together the brightest minds and showcasing incredible energy and creativity. This initiative has been a tremendous success, and I am very eager to see the continued progress and achievements of our participants. Thank you to everyone involved for making this possible.",
      author: "Anoop Ambika, CEO, Kerala Startup Mission",
    },
    {
      bg: bg3,
      avatar: person3,
      testimonial:
        "I started my entrepreneurship journey at IN50HRS, and seeing the Top 100 Coders aspirants brings back memories of that exciting time. You have an incredible opportunity before you, a chance to shape your future and make a significant impact. Seize it and make the most of it.",
      author: "Ajeesh Achuthan, Founder of Open, Kerala's first Unicorn startup",
    },
    {
      bg: bg3,
      avatar: person3,
      testimonial:
        "Lorem ipsum dolor sit amet consectetur. Vulputate auctor pretium quisque interdum erat ornare lacus nulla semper. In in at tempus sapien tellus ",
      author: "JOHN DOE",
    },
  ];

  // const cardData2: CardData[] = [
  //   {
  //     bg: bg4,
  //     avatar: person4,
  //     testimonial:
  //       "Lorem ipsum dolor sit amet consectetur. Vulputate auctor pretium quisque interdum erat ornare lacus nulla semper. In in at tempus sapien tellus ",
  //     author: "JOHN DOE",
  //   },
  //   {
  //     bg: bg5,
  //     avatar: person5,
  //     testimonial:
  //       "Lorem ipsum dolor sit amet consectetur. Vulputate auctor pretium quisque interdum erat ornare lacus nulla semper. In in at tempus sapien tellus ",
  //     author: "JOHN DOE",
  //   },
  //   {
  //     bg: bg4,
  //     avatar: person4,
  //     testimonial:
  //       "Lorem ipsum dolor sit amet consectetur. Vulputate auctor pretium quisque interdum erat ornare lacus nulla semper. In in at tempus sapien tellus ",
  //     author: "JOHN DOE",
  //   },
  // ];
  return (
    <div className={styles.testimonial}>
      <h1 className={styles.testiHead}>Testimonials</h1>
      <div className={styles.cardsContainer}>
        <Marquee pauseOnClick={true} className={styles.row1}>
          {cardData1.map((card, index) => (
            <Card1
              key={index}
              background={card.bg}
              avatar={card.avatar}
              text={card.testimonial}
              author={card.author}
            />
          ))}
        </Marquee>
        {/* <Marquee pauseOnClick={true} className={styles.row2} direction="right">
          {cardData2.map((card, index) => (
            <Card2
              key={index}
              background={card.bg}
              avatar={card.avatar}
              text={card.testimonial}
              author={card.author}
            />
          ))}
        </Marquee> */}
      </div>
    </div>
  );
}
