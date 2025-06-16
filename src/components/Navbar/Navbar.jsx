import { useState } from "react";
import logo from "../../assets/logo.jpg";
import { IoSunny, IoMoon } from "react-icons/io5";
import { MdManageSearch } from "react-icons/md";
import { FaGlobeEurope, FaBars } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { LuTv } from "react-icons/lu";

import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const tabs = [
  "Home",
  "Gold Prices",
  "Jordan",
  "Palestine",
  "MENA",
  "Wordl",
  "Life Style",
  "Health",
  "Technology",
  "Weather",
  "Econpmy",
  "Sport",
  "Top Stories",
  "Videos",
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <p>
          Welcome to Roya News, stay informed with the most important news at
          your fingertips.
        </p>
        <div className={styles.actionButtons}>
          <div className={styles.actionItem}>
            <FaArrowRightFromBracket color="white" size={20} />
            <button className={styles.button}>Log In</button>
          </div>
          <div className={styles.actionItem}>
            <LuTv color="white" size={20} />
            <button className={styles.button}>Live Broadcast</button>
          </div>
        </div>
      </div>

      <div className={styles.topRow}>
        <div className={styles.logoContainer}>
          <Link to={"/"}>
            <img src={logo} className={styles.logo} alt="Roya News Logo" />
          </Link>
          <span className={styles.logoText}>Roya News</span>
        </div>

        <div className={styles.searchContainer}>
          <div className={styles.colorModeContainer}>
            <IoSunny size={24} />
            <IoMoon size={20} />
          </div>
          <MdManageSearch size={26} />
          <div className={styles.langSwitch}>
            <span>عربي</span>
            <FaGlobeEurope size={24} />
          </div>
        </div>

        <FaBars
          className={styles.navToggler}
          size={24}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
        />
      </div>

      <div className={styles.tabContainer}>
        {tabs.map((tab, index) => (
          <span key={index} className={styles.tab}>
            {tab}
          </span>
        ))}
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {tabs.map((tab, index) => (
            <span key={index} className={styles.tab}>
              {tab}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
