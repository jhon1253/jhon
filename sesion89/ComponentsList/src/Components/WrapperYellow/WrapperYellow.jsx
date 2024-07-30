import React from "react";
import styles from "./WrapperYellow.module.css";
const WrapperYellow = (Component) => {
  return (
    <div className={styles.wrapper}>
      <Component />
    </div>
  );
};

export default WrapperYellow;
