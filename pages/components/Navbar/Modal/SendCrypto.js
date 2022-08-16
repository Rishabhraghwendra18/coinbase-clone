import React from "react";
import { Divider, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaWallet, FaBitcoin } from "react-icons/fa";
import styles from "./sendcrypto.module.css";

const CustomButton = styled(Button)(() => ({
  color: "white",
  width: "100%",
  "background-color": "#3773f5",
  padding: "1rem",
  "text-align": "center",
  "border-radius": "0.4rem",
  "font-size": "1.2rem",
  "&:hover": {
    cursor: "pointer",
    "background-color": "#4a80f6",
  },
}));
function SendCrypto() {
  return (
    <div className={styles.container}>
      <div className={styles.amount}>
        <div className={styles.flexInputContainer}>
          <input className={styles.flexInput} placeholder="0" />
          <span>ETH</span>
        </div>
        <div className={styles.warning}>Amount is Required</div>
      </div>
      <div className={styles.transferForm}>
        <div className={styles.row} style={{ gap: "0.1rem" }}>
          <div className={styles.fieldName}>To</div>
            <div className={styles.icon}>
              {" "}
              <FaWallet />
            </div>
            <input className={styles.recipient} placeholde="Address" />
        </div>
        <Divider />
        <div className={styles.row}>
          <div className={styles.fieldName}>Pay With</div>
          <div className={styles.coinSelectList}>
            <div className={styles.icon}>
              <FaBitcoin />
            </div>
            <div className={styles.coinName}>Bitcoin</div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <CustomButton>Continue</CustomButton>
      </div>
      <div className={styles.row}>
        <div className={styles.balanceTitle}>Balance Here</div>
        <div className={styles.balance}>$3000</div>
      </div>
    </div>
  );
}

export default SendCrypto;
