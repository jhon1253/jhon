import React from "react";
import styles from "./ListHouses.module.css";

const ListHouses = ({ children }) => {
  return <div className={styles.containerListHouses}>{children}</div>;
};

export default ListHouses;
