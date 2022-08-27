import React from "react";
import CoinItems from "./CoinItems";
import styles from "./index.module.css";

function CoinSelector({selectedToken,setSelectedToken,setShowCoinSelector}) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Selected Assets</div>
      <div className={styles.coinList}>
        <CoinItems selectedToken={selectedToken} setSelectedToken={setSelectedToken} setShowCoinSelector={setShowCoinSelector}/>
      </div>
    </div>
  );
}

export default CoinSelector;
