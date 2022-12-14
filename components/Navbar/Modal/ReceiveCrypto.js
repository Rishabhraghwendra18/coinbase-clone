import React, { useState,useContext } from "react";
import { Divider } from "@mui/material";
import { FaCheck, FaBitcoin } from "react-icons/fa";
import { BiCopy } from "react-icons/bi";
import UserContext from "../../..//Utils/context";
import styles from "./receivecrypto.module.css";
import Image from "next/image";

function ReceiveCrypto({ userWalletAddress }) {
  const [copied, setCopied] = useState(false);
  const {loggedInUserDetails} =  useContext(UserContext);
  return (
    <div className={styles.container}>
      <div className={styles.conten}>
        <div className={styles.qrContainer}>
          <Image
            src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${loggedInUserDetails?.walletAddress}`}
            width={250}
            height={250}
            alt="User receiving QR code"
          />
        </div>
        <Divider />
        <div className={styles.row}>
          <div className={styles.coinSelectList}>
            <div className={styles.icon}>
            <Image
          src={require(`../../../assets/matic.png`)}
          alt={`matic logo`}
        />
            </div>
            <div className={styles.coinName}>Matic</div>
          </div>
        </div>
        <Divider />
        <div className={styles.row}>
          <div>
            <div className={styles.title}>Polygon Mumbai</div>
            <div className={styles.address}>{loggedInUserDetails?.walletAddress}</div>
          </div>
          <div
            className={styles.copyButton}
            onClick={() => {
              navigator.clipboard.writeText(loggedInUserDetails?.walletAddress);
              setCopied(true);
            }}
          >
            {copied ? <FaCheck style={{ color: "#27ad75" }} /> : <BiCopy />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiveCrypto;
