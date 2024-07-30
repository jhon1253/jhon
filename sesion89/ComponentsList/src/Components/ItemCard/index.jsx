import React from "react";
import styles from "./ItemCard.module.css";
import image from "./house.jpeg";
import WrapperYellow from "../WrapperYellow/WrapperYellow";

const ItemCard = ({
  img = image,
  name = "Property name",
  city = "City",
  rooms = 0,
  floors = 0,
  sqft = 0,
  price = 0,
}) => {
  console.log(styles);
  return (
    <div className={styles.itemCard}>
      <img className={styles.itemCardImage} src={img} alt="" />
      <div className={styles.itemCardInfoWrapper}>
        <h2 className={styles.itemCardTitle}>{name}</h2>
        <p className={styles.itemCardDescription}>{city}</p>
        <div>
          <div className={styles.itemCardInfo}>
            {WrapperYellow(() => (
              <span>{rooms}</span>
            ))}
            <span>{rooms}</span>
            <span>{floors}</span>
            <span>{sqft}</span>
          </div>
          <div>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
