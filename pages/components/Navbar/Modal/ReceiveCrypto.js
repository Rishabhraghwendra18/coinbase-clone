import React from "react";
import { Divider } from "@mui/material";
import { FaCheck, FaBitcoin } from "react-icons/fa";
import styles from "./receivecrypto.module.css";

function ReceiveCrypto() {
  return (
    <div className={styles.container}>
      <div className={styles.conten}>
        <div className={styles.qrContainer}>
          <FaBitcoin />
        </div>
        <Divider />
        <div className={styles.row}>
          <div className={styles.coinSelectList}>
            <div className={styles.icon}>
              <FaBitcoin />
            </div>
            <div className={styles.coinName}>Bitcoin</div>
          </div>
        </div>
        <Divider />
        <div className={styles.row}>
          <div>
            <div className={styles.title}>Bitcoin</div>
            <div className={styles.address}>0xxxxxxxxxxx</div>
          </div>
          <div className={styles.copyButton}>
            <FaCheck />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiveCrypto;
