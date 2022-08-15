import React,{useState} from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import styles from "./index.module.css";
import ModalForSendAndReceive from "./Modal";

function Navbar({userWalletAddress}) {
  const [isOpen,setIsOpen] = useState(false);
  console.log("wallet: ",userWalletAddress)
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
          <Typography className={styles.walletAddress}>{userWalletAddress?.slice(0,7)}...{userWalletAddress?.slice(35)}</Typography>
        </div>
        <Button variant="contained" className={styles.walletConnectBuySellButton}>
          Buy/Sell
        </Button>
        <Button color="inherit" className={styles.walletConnectButton} onClick={()=>setIsOpen(true)}>
          Send/Receive
        </Button>
      </Toolbar>
      <ModalForSendAndReceive isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
    </AppBar>
  );
}

export default Navbar;
