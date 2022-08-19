import React from "react";
import CoinItems from "./CoinItems";
import styles from "./index.module.css";

function CoinSelector() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Selected Assets</div>
      <div className={styles.coinList}>
        <CoinItems />
      </div>
    </div>
  );
}

export default CoinSelector;
