import React, { useState } from "react";
import styles from "./payment.module.css"
import wallet from "../../assets/payment/wallet.png"
import Upi from "../../assets/payment/upi.webp"
import PayOn from "../../assets/payment/payon.webp";
import Netbanking from "../../assets/payment/netbanking.webp";
import Cards from "../../assets/payment/cards.webp";
import { Wallet } from "./wallet";
import { Upipage } from "./upi";
import { NetBanking } from "./netBanking";
import { PayOnDelivery } from "./payondelivery";
import { Total } from "../Cart/Total";
import Button from "../Button"

export const Payment =()=>{
    //const [wellet,setWellet] = useState(false);
    const [upi,setUpi] = useState(false);
    const [netbank,setNetbank] = useState(false);
    const [payDelivery,setPayDelivery] = useState(false);
    const button = {
        bg: "#ff6f61",
        text: "PLACE ORDER",
        width: "100%",
        br: "0px",
        color: "#ffffff",
        height: "50px",
        fontSize: "18px",
      };
    const handleupi = ()=>{
        setUpi(true);
        setNetbank(false);
        setPayDelivery(false);

    }
    const handlebanking = ()=>{
        setUpi(false);
        setNetbank(true);
        setPayDelivery(false);
    }
    const handlepay = ()=>{
        setUpi(false);
        setNetbank(false);
        setPayDelivery(true);
        
    }
    return (
        <div className={styles.paymentmain}>
            <div className={styles.payment}>
                <div>
                    <img src={wallet} alt=""/>
                    <p>WALLETS</p>
                </div>
                <div onClick={handleupi}>
                    <img src={Upi} alt=""/>
                    <p>UPI</p>
                </div>
                <div >
                    <img src={Cards} alt=""/>
                    <p>CARDS</p>
                </div>
                <div onClick={handlebanking}>
                    <img src={Netbanking} alt=""/>
                    <p>NET BANKING</p>
                </div>
                <div onClick={handlepay}>
                    <img src={PayOn} alt=""/>
                    <p>PAY ON DELIVERY</p>
                </div>
            </div>
            <div className={styles.payment1}>
                {upi ? <div><Upipage/></div> : netbank ? <div><NetBanking/></div> : 
                payDelivery ? <div><PayOnDelivery/></div> :<div><Wallet/></div>}
               
            </div>
            <div className={styles.rightpayment}>
                <div>
                    <p>Get 10% off (up to ₹200) on medicines and health products with HDFC bank credit cards.</p>
                    <p>SHOW ALL PAYMENT OFFERS</p>
                </div>
                <Total/>
                <div>
                  <Button onClick={()=>
                  localStorage.removeItem('subtotal')
                } styles={button}/>
                </div>
            </div>
        </div>
    )
}