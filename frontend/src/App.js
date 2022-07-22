import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Cart } from "./components/Cart/cart";
import Navigation from "./components/Navigation/Navigation";
import Button from "./components/Button";
import { Address } from "./components/Cart/address";
import { Delivery } from "./components/Cart/delivery";
import Offer from "./components/Offer/Offer";
import { OrderSummary } from "./components/Cart/ordersummary";
import { Payment } from "./components/payment/payment";
function App() {
  return (
    <div className="App">
      <Payment/>
    </div>
  );
}

export default App;
