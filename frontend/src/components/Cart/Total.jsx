import React from "react";
import styles from "./cart.module.css";
export const Total = ()=>{
    return (
        <div className={styles.prdata}>
            <div className={styles.discount}>
                <p>Item Total(MRP)</p>
                <p>₹2445</p>
            </div>
            <div className={styles.discount}>
                <p>Price Discount</p>
                <p>-₹700</p>
            </div>
            <hr />
            <div className={styles.discount}>
                <p>Shipping Fee</p>
                <p>₹0</p>
            </div>
            <div className={styles.discount}>
                <p>Packaging and Handling Chargesⓘ</p>
                <p>₹5</p>
            </div>
            <hr />
            <div className={styles.paid}>
                <p>To be paid</p>
                <p>₹1750</p>
            </div>
            <div className={styles.paid1}>
                <p>To be paid</p>
                <p>₹700</p>
            </div>
        </div>
    )
}