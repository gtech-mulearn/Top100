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
        "Lorem ipsum dolor sit amet consectetur. Vulputate auctor pretium quisque interdum erat ornare lacus nulla semper. In in at tempus sapien tellus ",
      author: "JOHN DOE",
    },
    {
      bg: bg3,
      avatar: person3,
      testimonial:
        "Lorem ipsum dolor sit amet consectetur. Vulputate auctor pretium quisque interdum erat ornare lacus nulla semper. In in at tempus sapien tellus ",
      author: "JOHN DOE",
    },
    {
      bg: bg2,
      avatar: person2,
      testimonial:
        "Lorem ipsum dolor sit amet consectetur. Vulputate auctor pretium quisque interdum erat ornare lacus nulla semper. In in at tempus sapien tellus ",
      author: "JOHN DOE",
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
