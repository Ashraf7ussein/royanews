import React from "react";
import logo from "../../assets/logo.jpg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} className={styles.logo} />
      <span className={styles.logoText}>Roya News</span>

      <p className={styles.text}>Roya © 2024 All Rights Reserved</p>
      <p className={styles.text}>
        Roya News English brings you the biggest news stories from Jordan, the
        Arab world and beyond.
      </p>
    </footer>
  );
};

export default Footer;
