import React from "react";
import styles from "./index.module.css";

function Promo() {
  return (
    <div className={styles.container}>

      <div className={styles.offerCard}>
        <div className={styles.title}>Yield earned</div>
        <div className={styles.description}>
          Earn up CO 2.84% APY on your crypto
        </div>
        <div className={styles.placeholder} />
        <div className={styles.additional} style={{ fontSize: '1.5rem' }}>
          $0.000066 <span>2.84% APY</span>
        </div>
      </div>

      <div className={styles.offerCard}>
        <div className={styles.title}>Learn and Earn</div>
        <div className={styles.description}>
        Earn up CO 2.84% APY on your crypto
        </div>
        <div className={styles.placeholder} />
        <div className={styles.additional} style={{ color: '#3773f5',cursor:'pointer' }}>
        Verify Identity
        </div>
      </div>
    </div>
  );
}

export default Promo;
