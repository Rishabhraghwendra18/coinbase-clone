import React from "react";
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

function Portfolio() {
  function createData(name, balance, price, allocation) {
    return { name, balance, price, allocation };
  }

  const rows = [
    createData("Bitcoin", "$2300", "$5.0", 41.9),
    createData("Bitcoin", "$2300", "$5.0", 41.9),
    createData("Bitcoin", "$2300", "$5.0", 41.9),
  ];
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.chart}>
          <div className={styles.balance}>
            <div className={styles.balanceTitle}>Portfolio balance</div>
            <div className={styles.balanceValue}>$30,000</div>
          </div>
          <BalanceChart />
        </div>
        <div className={styles.portfolioTable}>
            <TableContainer style={{backgroundColor:'inherit',color:'inherit'}}>
              <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <caption className={styles.title}>Your Assets</caption>
                <TableHead style={{color:'white !important'}}>
                  <TableRow style={{color:'white'}}>
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
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.balance}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.allocation}</TableCell>
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
