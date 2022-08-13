import React,{useState} from "react";
import styles from "./index.module.css";
import coinBaseLogo from "../../../assets/cb-logo.png";
import {navItems} from './navItems';
import Image from "next/image";
function SideBar() {
    const [activeIcon, setActiveIcon] = useState(navItems[0].title)
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image src={coinBaseLogo} alt="Coinbase Logo" />
        </div>
      </div>
      <div className={styles.navItemsContainer}>
        {
            navItems.map(item=>(
                <div className={styles.navItem} key={item.title} onClick={() => setActiveIcon(item.title)}>
                    <div className={styles.navIcon} style={{ color: item.title === activeIcon && '#3773f5' }}>
                        {item.icon}
                    </div>
                    <div className={styles.navTitle}>
                        {item.title}
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default SideBar;
