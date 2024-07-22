import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./Shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Atez E-Commerce Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
