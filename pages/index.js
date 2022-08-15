import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { useMoralis } from "react-moralis";
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
  const { authenticate, isAuthenticated, logout } = useMoralis();
  const [userWalletAddress, setUserWalletAddress] = useState();
  // const connectWithMetamask = useMetamask();
  // const walletAddress = useAddress();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in to coinbase clone" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user?.get("ethAddress"));
          setUserWalletAddress(user?.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    await logout();
    setUserWalletAddress();
    console.log("logged out");
  };
  useEffect(() => {
    return () => logOut();
  }, []);
  return (
    <>
      {userWalletAddress ? (
        <div className={styles.container}>
          <SideBar />
          <div className={styles.mainContainer}>
            <Navbar userWalletAddress={userWalletAddress} />
            <div className={styles.main}>
              <Portfolio />
              <Promo />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.walletConnet}>
          <CustomeButton variant="contained" onClick={login}>
            Connect Wallet
          </CustomeButton>
          <div className={styles.details}>
            You need Chrome to be
            <br /> able to run this app.
          </div>
        </div>
      )}
    </>
  );
}
