import React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import styles from "./index.module.css";

function Navbar() {
  const walletAddress = "0x46bEAac2b2c7637dc1E5d091A1D54a5a12958c02";
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
          <Typography className={styles.walletAddress}>{walletAddress.slice(0,7)}...{walletAddress.slice(35)}</Typography>
        </div>
        <Button color="inherit" className={styles.walletConnectButton}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
