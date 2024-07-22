import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/home">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <ShoppingCartOutlined style={{ fontSize: '24px' }} />
        </Link>
      </div>
    </div>
  );
};
