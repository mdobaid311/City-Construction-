import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <h2>Shovel</h2>
        <div>
          <span className={styles.active}>ALL</span>
          <span>INPROGRESS</span>
          <span>COMPLETED</span>
        </div>
      </div>
      <div className={styles.header_right}>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Header;
