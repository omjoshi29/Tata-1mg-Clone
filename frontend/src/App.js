import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Cart } from "./components/Cart/cart";
import Navigation from "./components/Navigation/Navigation";
import Button from "./components/Button";
function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Cart/>
    </div>
  );
}

export default App;
