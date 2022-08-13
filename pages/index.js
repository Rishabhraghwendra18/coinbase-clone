import Head from "next/head";
import Image from "next/image";
import { Button } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import Navbar from "./components/Navbar";
import styles from "../styles/Home.module.css";
import Portfolio from "./components/Portfolio";
import Promo from "./components/Promo";
import SideBar from "./components/SideBar";

const CustomeButton = styled(Button)(() => ({
  border: "1px solid #282b2f",
  padding: "0.8rem",
  "font-size": "1.3rem",
  "font-weight": "500",
  "border-radius": "0.4rem",
  "background-color": "#3773f5",
  color: "#000",
  "&:hover": {
    cursor: "pointer",
  },
}));

export default function Home() {
  const connectWithMetamask = useMetamask();
  const walletAddress = useAddress();
  return (
    <>
      {walletAddress ? (
        <div className={styles.container}>
          <SideBar />
          <div className={styles.mainContainer}>
            <Navbar walletAddress={walletAddress}/>
            <div className={styles.main}>
              <Portfolio />
              <Promo />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.walletConnet}>
          <CustomeButton variant="contained" onClick={connectWithMetamask}>Connect Wallet</CustomeButton>
          <div className={styles.details}>
            You need Chrome to be
            <br /> able to run this app.
          </div>
        </div>
      )}
    </>
  );
}
