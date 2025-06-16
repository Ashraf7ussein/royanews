import Card from "../../components/Card/Card";
import styles from "./MainContent.module.css";
import cardImage from "../../assets/cardImage.jpg";
import news from "../../assets/news.png";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";

const items = [
  {
    img: cardImage,
    title: "Trump flexes military might at parade as protests sweep US",
    date: "7 hours ago",
  },
  {
    img: img7,
    title: "What is America's 'No Kings Day' protest?",
    date: "7 hours ago",
  },
  {
    img: img8,
    title: "EgyptAir suspends flights to Beirut, Amman, Baghdad, Erbil",
    date: "7 hours ago",
  },
];

const MainContent = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.mainImageContainer}>
          <img src={news} alt="news" />
          <div className={styles.gradientOverlay} />
          <p className={styles.imageText}>
            LIVE UPDATES | 'Israel' strikes Iran: Top commanders killed,
            retaliation begins
          </p>
        </div>

        <div className={styles.cardColumn}>
          {items.map((item) => (
            <Card card={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
