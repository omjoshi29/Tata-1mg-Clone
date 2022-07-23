import{Routes,Route} from "react-router-dom"
import {Login} from "../components/Signup/Login"
import{LoadingGmail} from "../components/Signup/LoadingGmail"
import Navigation from "../components/Navigation/Navigation"
import React from "react"
import { Address } from "../components/Cart/address"
import { Cart } from "../components/Cart/cart"
import { Delivery } from "../components/Cart/delivery"
import { OrderSummary } from "../components/Cart/ordersummary"
import { Payment } from "../components/payment/payment"
import Offer from "../components/Offer/Offer"
import About from "../abtcomponents/About"
import Footer from "../components/Footer/Footer"
export const MainRoutes = ()=>{
    return (
        <div>
        <Navigation/>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/loading/:id" element={<LoadingGmail/>}/>
            <Route path="/address" element={<Address/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/delivery" element={<Delivery/>}/>
            <Route path="/summary" element={<OrderSummary/>}/>
            <Route path ="/payment" element={<Payment/>}/>
            <Route path ="/offer" element={<Offer/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>
        </div>
    )
}