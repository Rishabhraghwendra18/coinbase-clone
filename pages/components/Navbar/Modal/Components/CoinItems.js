import React from "react";
import { FaBitcoin, FaCheck } from "react-icons/fa";
import styles from "./coinItems.module.css";

function CoinItems() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.icon}>
          <FaBitcoin />
        </div>
        <div className={styles.nameDetails}>
          <div className={styles.name}>Bitcoin</div>
          <div className={styles.symbol}>BTC</div>
        </div>
      </div>
      <div className={styles.balance}>0.1 BTC</div>
      <div className={styles.isSelected}>
        <FaCheck />
      </div>
    </div>
  );
}

export default CoinItems;
