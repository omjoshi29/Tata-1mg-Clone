import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Cart } from "./components/Cart/cart";
import Navigation from "./components/Navigation/Navigation";
import Button from "./components/Button";
import { Address } from "./components/Cart/address";
function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      {/* <Cart/> */}
      <Address/>
    </div>
  );
}

export default App;
