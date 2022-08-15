import React, { useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import { Moralis } from "moralis";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import BalanceChart from "../BalanceChart";
import styles from "./index.module.css";
import Image from "next/image";
import maticLogo from "../../../assets/matic.png";

function Portfolio() {
  const [userBalance, setUserBalance] = useState();
  const [maticUSDPrice, setMaticUSDPrice] = useState();
  function createData(name, balance, price, allocation) {
    return { name, balance, price, allocation };
  }
  const Web3Api = useMoralisWeb3Api();
  const fetchTokenBalances = async () => {
    const option = {
      chain: "mumbai",
    };
    const balances = await Web3Api.account.getNativeBalance(option);
    setUserBalance(Moralis.Units.FromWei(balances.balance));
    console.log(balances);
  };
  const fetchTokenPrice = async () => {
    const options = {
      address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    };
    const price = await Web3Api.token.getTokenPrice(options);
    setMaticUSDPrice(price.usdPrice);
    console.log("price: ", price);
  };
  useEffect(() => {
    fetchTokenBalances();
    fetchTokenPrice();
  }, []);
  const rows = [
    createData(
      "Matic",
      userBalance?.toString().slice(0, 6),
      maticUSDPrice?.toString().slice(0, 4),
      100
    ),
    // createData("Bitcoin", "$2300", "$5.0", 41.9),
    // createData("Bitcoin", "$2300", "$5.0", 41.9),
  ];
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.chart}>
          <div className={styles.balance}>
            <div className={styles.balanceTitle}>Portfolio balance</div>
            <div className={styles.balanceValue}>
              ${userBalance * maticUSDPrice}
            </div>
          </div>
          <BalanceChart />
        </div>
        <div className={styles.portfolioTable}>
          <TableContainer
            style={{ backgroundColor: "inherit", color: "inherit" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <caption className={styles.title}>Your Assets</caption>
              <TableHead style={{ color: "white !important" }}>
                <TableRow style={{ color: "white" }}>
                  <TableCell>
                    <h3>Name</h3>
                  </TableCell>
                  <TableCell align="right">
                    <h3>Balance</h3>
                  </TableCell>
                  <TableCell align="right">
                    <h3>Price</h3>
                  </TableCell>
                  <TableCell align="right">
                    <h3>Allocation</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      <div className={styles.nameCol}>
                        <div className={styles.coinIcon}>
                          <Image src={maticLogo} alt="matic logo"/>
                        </div>
                        <div>
                          <div className={styles.primary}>{row.name}</div>
                          <div className={styles.secondary}>{row.name}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="right">{row.balance}</TableCell>
                    <TableCell align="right">${row.price}</TableCell>
                    <TableCell align="right">{row.allocation}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
