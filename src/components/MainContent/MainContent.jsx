import Card from "../../components/Card/Card";
import news from "../../assets/news.png";
import styles from "./MainContent.module.css";

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
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
