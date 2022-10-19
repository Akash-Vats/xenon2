import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { productFetch } from "../../api";
import Product from "../Product/Product";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await productFetch();
      if (response.data) {
        
        setProducts(response.data.data);
      }
    })();
  }, []);
    
  return (
    <div className="containers">
      <div className="Products">
        <h2>Products</h2>
      </div>
      <div className="product_list">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

const product = [
  {
    name: "Sport",
    model: 2022,
    price: 70000,
    Brand: "TVS",
    img: "1",
  },
  {
    name: "Discover",
    model: 2022,
    price: 80000,
    Brand: "Bajaj",
    img: "2",
  },
  {
    name: "Passion",
    model: 2022,
    price: 75000,
    Brand: "Hero",
    img: "3",
  },
  {
    name: "Bullet",
    model: 2022,
    price: 150000,
    Brand: "Royal Enfield",
    img: "4",
  },
  {
    name: "Hayate",
    model: 2022,
    price: 85000,
    Brand: "Suzuki",
    img: "5",
  },
];
