import styles from "./Card.module.css";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { MdOutlineIosShare } from "react-icons/md";
import { TbReceipt } from "react-icons/tb";

const Card = ({ card }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardcontent}>
        <div>
          <div className={styles.text}>
            <p>{card.date}</p>
            <span className={styles.spacer}>|</span>
            <p className={styles.category}>World</p>
          </div>

          <p>{card.title}</p>
        </div>

        <img src={card.img} className={styles.cardImage} />
      </div>
      <div className={styles.actionButtons}>
        <div className={styles.iconContainer}>
          0
          <AiFillLike size={24} />
        </div>
        <div className={styles.iconContainer}>
          0
          <BiSolidDislike size={24} />
        </div>

        <MdOutlineIosShare size={24} />
        <TbReceipt size={24} />
      </div>
    </div>
  );
};

export default Card;
