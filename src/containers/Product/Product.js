import React from "react";
import "./Product.css";
const Product = ({ product }) => {
  return (
    <div className="singleProduct">
      <img src={product.img} />
      <h5>{product.name}</h5>
      <div className="brand">
        <p>Brand:{product.Brand}</p>
        <p>Model:{product.model}</p>
        <p>Price:{product.price}</p>
      </div>
    </div>
  );
};

export default Product;
