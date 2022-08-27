import React from "react";
import styles from "./index.module.css";

function MobileView() {
  return (
    <div className={styles.container}>
      <div className={styles.mobileView}>
        Mobile View is currently not supported.
        <br />
        Please view on Laptop or PC.
      </div>
    </div>
  );
}

export default MobileView;
