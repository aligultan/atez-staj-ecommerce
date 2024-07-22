import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { Cart } from "./pages/Cart/Cart";
import { ShopContextProvider } from "./context/ShopContext";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<PrivateRoute element={Home} />} />
            <Route path="/profile" element={<PrivateRoute element={Profile} />} />
            <Route path="/about" element={<PrivateRoute element={About} />} />
            <Route path="/contact" element={<PrivateRoute element={Contact} />} />
            <Route path="/cart" element={<PrivateRoute element={Cart} />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
