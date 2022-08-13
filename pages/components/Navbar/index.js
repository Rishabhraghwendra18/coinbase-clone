import React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import styles from "./index.module.css";

function Navbar({walletAddress}) {
  console.log("wallet: ",walletAddress)
  return (
    <AppBar position="static" className={styles.container}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          className={styles.title}
        >
          Assets
        </Typography>
        <div className={styles.walletLink}>
          <Typography className={styles.walletAddressTitle}>
            Wallet Connected
          </Typography>
          <Typography className={styles.walletAddress}>{walletAddress?.slice(0,7)}...{walletAddress?.slice(35)}</Typography>
        </div>
        <Button variant="contained" className={styles.walletConnectBuySellButton}>
          Buy/Sell
        </Button>
        <Button color="inherit" className={styles.walletConnectButton}>
          Send/Receive
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
