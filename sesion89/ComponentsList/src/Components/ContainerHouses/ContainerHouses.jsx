import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard";
import ListHouses from "../ListHouses/ListHouses";
import WrapperYellow from "../WrapperYellow/WrapperYellow";

const ContainerHouses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("https://house-lydiahallie.vercel.app/api/listings")
      .then((response) => response.json())
      .then((data) => setHouses(data["listings"]));
  }, []);
  return (
    <ListHouses>
      {houses.map((house, index) => (
        <ItemCard
          key={index}
          img={house.image}
          name={house.name}
          city={house.city}
          rooms={house.rooms}
          floors={house.floors}
          sqft={house.sqft}
          price={house.price}
        />
      ))}
    </ListHouses>
  );
};

export default ContainerHouses;
