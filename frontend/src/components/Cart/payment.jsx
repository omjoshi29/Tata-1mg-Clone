import React from "react";
import styles from "./payment.module.css"
import wallet from "../../assets/payment/wallet.png"
import Upi from "../../assets/payment/upi.webp"
import PayOn from "../../assets/payment/payon.webp";
import Netbanking from "../../assets/payment/netbanking.webp";
import Cards from "../../assets/payment/cards.webp";

export const Payment =()=>{
    return (
        <div>
            <div className={styles.payment}>
                <div>
                    <img src={wallet}/>
                    <p>WALLETS</p>
                </div>
                <div>
                    <img src={Upi}/>
                    <p>UPI</p>
                </div>
                <div>
                    <img src={Cards}/>
                    <p>CARDS</p>
                </div>
                <div>
                    <img src={Netbanking}/>
                    <p>NET BANKING</p>
                </div>
                <div>
                    <img src={PayOn}/>
                    <p>PAY ON DELIVERY</p>
                </div>
            </div>
        </div>
    )
}