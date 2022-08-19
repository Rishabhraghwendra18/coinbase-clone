import React, { useContext, useState } from "react";
import { Divider, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useWeb3Transfer } from "react-moralis";
import { Moralis } from "moralis";
import { FaWallet, FaBitcoin } from "react-icons/fa";
import UserContext from "../../../../Utils/context";
import styles from "./sendcrypto.module.css";
import CoinSelector from "./Components";

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
  const { loggedInUserDetails, setRefreshDashboard, refreshDashboard } =
    useContext(UserContext);
  const [showCoinSelector,setShowCoinSelector] = useState(false);
  const [transferValue, setTransferValue] = useState();
  const [receiverAddress, setReceiverAddress] = useState();
  const [isFetching,setIsFetching] = useState(false);
  let options = {
    amount: transferValue
      ? Moralis.Units.ETH(transferValue)
      : Moralis.Units.ETH("0.0"),
    receiver: receiverAddress,
    type: "native",
  };
  // const { fetch, error, isFetching } = useWeb3Transfer(options);
  const makeTxn = async () => {
    setIsFetching(true);
    const transaction = await Moralis.transfer(options);
    const result = await transaction.wait();
    console.log("txn result: ", result);
    setIsFetching(false);
    setRefreshDashboard(!refreshDashboard);
  };
  return (
    <>
    {showCoinSelector ? (
      <CoinSelector/>
     ):( 
    <div className={styles.container}>
      <div className={styles.amount}>
        <div className={styles.flexInputContainer}>
          <input
            className={styles.flexInput}
            placeholder="0"
            onChange={(e) => setTransferValue(e.target?.value)}
          />
          <span>MATIC</span>
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
          <input
            className={styles.recipient}
            placeholde="Address"
            onChange={(e) => setReceiverAddress(e.target?.value)}
          />
        </div>
        <Divider />
        <div className={styles.row}>
          <div className={styles.fieldName}>Pay With</div>
          <div className={styles.coinSelectList} onClick={()=>setShowCoinSelector(true)}>
            <div className={styles.icon}>
              <FaBitcoin />
            </div>
            <div className={styles.coinName}>Bitcoin</div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <CustomButton
          onClick={makeTxn}
          disabled={
            transferValue && receiverAddress && !isFetching ? false : true
          }
        >
          Continue
        </CustomButton>
      </div>
      <div className={styles.row}>
        <div className={styles.balanceTitle}>MATIC Balance</div>
        <div className={styles.balance}>
          {isFetching
            ? "Fetching..."
            : `${loggedInUserDetails.userBalance?.toString().slice(0, 6)} MATIC`}
        </div>
      </div>
    </div>
    )} 
    </>
  );
}

export default SendCrypto;
