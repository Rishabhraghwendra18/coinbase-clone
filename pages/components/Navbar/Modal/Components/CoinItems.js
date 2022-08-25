import React, { useContext } from "react";
import { FaBitcoin, FaCheck } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
import Image from "next/image";
import UserContext from "../../../../../Utils/context";
import styles from "./coinItems.module.css";

function CoinItems({ selectedToken, setSelectedToken, setShowCoinSelector }) {
  const { loggedInUserDetails, setRefreshDashboard, refreshDashboard } =
    useContext(UserContext);
  let { tokenBalance, userBalance } = loggedInUserDetails;
  let tokens = [
    {
      balance: userBalance,
      name: "Matic",
      symbol: "Matic",
    },
    ...tokenBalance,
  ];
  console.log("tokens: ", tokens);
  const renderImage = (coinName) => {
    try {
      return (
        <Image
          src={require(`../../../../../assets/${coinName?.toLowerCase()}.png`)}
          alt={`${coinName} logo`}
        />
      );
    } catch (error) {
      console.error(`${coinName} logo not found`);
      return <BsCoin />;
    }
  };
  return (
    <>
      {tokens?.map((coin, index) => (
        <div
          className={styles.container}
          key={index}
          onClick={() => {
            setSelectedToken({
              address: coin.token_address,
              name: coin.name,
            });
            setShowCoinSelector(false);
          }}
        >
          <div className={styles.main}>
            <div className={styles.icon}>{renderImage(coin.name)}</div>
            <div className={styles.nameDetails}>
              <div className={styles.name}>{coin.name}</div>
              <div className={styles.symbol}>{coin.symbol}</div>
            </div>
          </div>
          <div className={styles.balance}>{`${
            parseInt(coin.balance) / 1000000000000000000
          } ${coin.symbol}`}</div>
          {selectedToken === coin.name && (
            <div className={styles.isSelected}>
              <FaCheck />
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default CoinItems;
