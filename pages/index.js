import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Moralis } from "moralis";
// import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { useMoralis } from "react-moralis";
import UserContext from "../Utils/context";
import Navbar from "./components/Navbar";
import styles from "../styles/Home.module.css";
import Portfolio from "./components/Portfolio";
import Promo from "./components/Promo";
import SideBar from "./components/SideBar";
import MobileView from "./components/MobileView";

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
  const [loggedInUserDetails, setLoggedInUserDetails] = useState({});
  const [refreshDashboard, setRefreshDashboard] = useState(false);
  // const connectWithMetamask = useMetamask();
  // const walletAddress = useAddress();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in to coinbase clone" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user?.get("ethAddress"));
          setLoggedInUserDetails({
            ...loggedInUserDetails,
            walletAddress: user?.get("ethAddress"),
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      const chainId = Moralis.chainId;
      if (chainId !== "0x13881") {
        await Moralis.switchNetwork(0x13881);
      }
      // console.log("current chain: ",chainId);
    }
  };

  const logOut = async () => {
    await logout();
    setUserWalletAddress();
    console.log("logged out");
  };
  useEffect(() => {
    return () => logOut();
  }, [logOut]);
  return (
    <UserContext.Provider
      value={{
        loggedInUserDetails,
        setLoggedInUserDetails,
        refreshDashboard,
        setRefreshDashboard,
      }}
    >
      <MobileView />
      <div className={styles.mainDiv}>
        {loggedInUserDetails.walletAddress ? (
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
      </div>
    </UserContext.Provider>
  );
}
