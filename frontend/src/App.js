import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Cart } from "./components/Cart/cart";
import Navigation from "./components/Navigation/Navigation";
import Button from "./components/Button";
import { Address } from "./components/Cart/address";
import { Delivery } from "./components/Cart/delivery";
import Offer from "./components/Offer/Offer";
import Footer from "./components/Footer/Footer";
import SimpleSlider from "./components/Sliders/BannerSlider";
function App() {
  return (
    <div className="App">
      {/* <Navigation />
      <Footer /> */}
      <SimpleSlider />
    </div>
  );
}

export default App;
