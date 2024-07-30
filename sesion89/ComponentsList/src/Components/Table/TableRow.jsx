import React from "react";
import styles from "./TableRow.module.css";

const TableRow = ({ children }) => {
  return <div className={styles.flex}>{children}</div>;
};

export default TableRow;
