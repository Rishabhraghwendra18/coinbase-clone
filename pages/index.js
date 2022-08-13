import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/Navbar";
import styles from "../styles/Home.module.css";
import Portfolio from "./components/Portfolio";
import Promo from "./components/Promo";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <SideBar/>
      <div className={styles.mainContainer}>
        <Navbar />
        <div className={styles.main}>
          <Portfolio />
          <Promo />
        </div>
      </div>
    </div>
  );
}
