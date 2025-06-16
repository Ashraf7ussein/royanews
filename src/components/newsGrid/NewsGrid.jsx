import React from "react";
import styles from "./NewsGrid.module.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";

const newsItems = [
  {
    img: img1,
    title: "'Israel'-Iran war",
    date: "14 hours ago",
  },
  { img: img2, title: "Developments in Syria", date: "06-12-2024 16:51" },
  { img: img3, title: "2024 US elections", date: "04-11-2024 14:16" },
  {
    img: img4,
    title: "'Israel' launches major attack on Lebanon",
    date: "23-09-2024 16:46",
  },
  { img: img5, title: "Operation Aqsa Typhoon", date: "02-07-2023 15:19" },
  {
    img: img6,
    title: "Al-Weibdeh Building Collapse",
    date: "01-07-2022 16:36",
  },
];

const NewsGrid = () => {
  return (
    <div className={styles.gridContainer}>
      {newsItems.map((item, index) => (
        <div className={styles.mainImageContainer} key={index}>
          <img src={item.img} alt={item.title} className={styles.image} />
          <div className={styles.gradientOverlay} />
          <p className={styles.imageText}>{item.title}</p>
          <p className={styles.imageDate}>{item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsGrid;
