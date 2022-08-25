import React, { useEffect, useState, useContext, useCallback, useMemo } from "react";
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
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
import UserContext from "../../../Utils/context";
import BalanceChart from "../BalanceChart";
import styles from "./index.module.css";
import {BsCoin} from "react-icons/bs";
import maticLogo from "../../../assets/matic.png";

function Portfolio() {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [userBalance, setUserBalance] = useState();
  const [maticUSDPrice, setMaticUSDPrice] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [rows, setRows] = useState([]);
  const [totalPortfolioBalance, setTotalPortfolioBalance] = useState(0);
  const {
    loggedInUserDetails,
    setLoggedInUserDetails,
    refreshDashboard,
    setRefreshDashboard,
  } = useContext(UserContext);
  function createData(name, balance, price, allocation) {
    return { name, balance, price, allocation };
  }
  const Web3Api = useMoralisWeb3Api();

  const fetchTokenBalances = async () => {
    setIsFetching(true);
    const option = {
      chain: "mumbai",
    };
    const balances = await Web3Api.account.getNativeBalance(option);
    const userTokens = await Web3Api.account.getTokenBalances(option);
    setLoggedInUserDetails({
      ...loggedInUserDetails,
      userBalance: Moralis.Units.FromWei(balances.balance),
      tokenBalance: userTokens,
    });
    setUserBalance(Moralis.Units.FromWei(balances.balance));
    console.log("balances: ", userTokens);
  };
  const fetchTokenPrice = async () => {
    const options = {
      address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    };
    const price = await Web3Api.token.getTokenPrice(options);
    setMaticUSDPrice(price.usdPrice);
    console.log("price: ", price);
    setIsFetching(false);
  };
  const createRows = () => {
    let rows = [];
    const portfolioValue = maticUSDPrice;
    let totalBalance;
    if (loggedInUserDetails.tokenBalance) {
      const userBalance =  loggedInUserDetails.tokenBalance?.map(e=>e.balance / 1000000000000000000);
      totalBalance = userBalance.reduce((sum,e)=>sum+e,0)+parseFloat(loggedInUserDetails.userBalance).toFixed(0);
      rows = loggedInUserDetails.tokenBalance?.map((e,index) => {
        const token = {
          name: e.name,
          balance: userBalance[index],
          allocation:  ((userBalance[index]/totalBalance)*100).toFixed(0),
        };
        if (e.name === "USDC" || e.name === "USDT") {
          token.price = 1;
          portfolioValue += token.balance * 1;
          return token;
        } else {
          token.price = 35;
          portfolioValue += token.balance * 35;
          return token;
        }
      });
    }
    console.log("rows: ", rows);
    setTotalPortfolioBalance(portfolioValue);
    setRows([
      createData(
        "Matic",
        loggedInUserDetails.userBalance?.toString().slice(0, 6),
        maticUSDPrice?.toString().slice(0, 4),
        ((loggedInUserDetails.userBalance/totalBalance)*100).toFixed(0)
      ),
      ...rows
    ]);
  };
  const renderImage = (coinName) =>{
    try {
      return <Image src={require(`../../../assets/${coinName?.toLowerCase()}.png`)} alt={`${coinName} logo`} />
    } catch (error) {
      console.error(`${coinName} logo not found`);
      return <BsCoin/>
    }
  }
  useEffect(()=>{
    createRows();
  },[loggedInUserDetails.tokenBalance])
  useEffect(() => {
    fetchTokenPrice();
    fetchTokenBalances();
  }, [refreshDashboard]);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.chart}>
          <div className={styles.balance}>
            <div className={styles.balanceTitle}>Portfolio balance</div>
            {isFetching ? (
              <ClipLoader color="#8a919e" />
            ) : (
              <div className={styles.balanceValue}>
                ${totalPortfolioBalance.toFixed(2)}
              </div>
            )}
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
                {isFetching ? (
                  <ClipLoader color="#8a919e" />
                ) : (
                  <>
                    {rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          <div className={styles.nameCol}>
                            <div className={styles.coinIcon}>
                              {renderImage(row.name)}
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
                  </>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
