import React from "react";

const Product = ({ children }) => {
  return (
    <div className="product">
      <span>{children}</span>
    </div>
  );
};

export default Product;
