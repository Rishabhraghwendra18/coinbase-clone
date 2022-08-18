import React,{useState, useContext} from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import UserContext from "../../../Utils/context";
import styles from "./index.module.css";
import ModalForSendAndReceive from "./Modal";

function Navbar() {
  const [isOpen,setIsOpen] = useState(false);
  const {loggedInUserDetails} =  useContext(UserContext);
  console.log("wallet: ",loggedInUserDetails)
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
          <Typography className={styles.walletAddress}>{loggedInUserDetails?.walletAddress?.slice(0,7)}...{loggedInUserDetails?.walletAddress?.slice(35)}</Typography>
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
