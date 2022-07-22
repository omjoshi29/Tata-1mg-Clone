import React from "react"
import styles from "./cart.module.css"
import Button from "../Button";
import { Total } from "./Total";
export const OrderSummary = ()=>{
    const button = {
        bg: "#ff6f61",
        text: "PROCEED TO PAYMENT",
        width: "100%",
        br: "0px",
        color: "#ffffff",
        height: "50px",
        fontSize: "18px",
      };
    return (
        <div className={styles.summarymain}>
             <div className={styles.summary}>
                 <p>Order Summary</p>
                 <p>Your Items</p>
                 <div>
                       <div className={styles.summary1}>
                          Arriving by Wed, 27 Jul info
                       </div>
                       <div className={styles.summary2}>
                         <div className={styles.choose2}>
                             <img width="40px" src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/ym5cke0aftsrelfivdzz.jpg"/>
                             <div>
                                 <p>Siddhayu Calciactiv Advanced Natural Calcium Supplement Tablet</p>
                                 <p>bottle of 60 tablets</p>
                             </div>
                          </div>
                          <div>
                              <p>₹275</p>
                              <s>MRP ₹345</s>
                              <p>NeuCoins earned: 6</p>
                          </div>
                       </div>
                 </div>
             </div>
             <div className={styles.rightsummary}>
                 <p>Select Address</p>
                 <div className={styles.choosedata}>
                    <div className={styles.addressdata1}>
                      <div>
                         <img width="30px" src="https://image.shutterstock.com/image-vector/screen-record-button-isolated-on-600w-1457333453.jpg"/>
                         <p>Home</p>
                      </div>
                      <p>nagesh kumawat</p>
                      <p>1234567890</p>
                      <p>Address</p>
                      <p>Ratlam Madhya pradesh-457339</p>
                    </div>
                 </div>
                 <div className={styles.coins}>
                        <div className={styles.coinsdata}>
                            <div>
                                <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1645088829/210921_TataNeu_appicon_light_24px_circle_3_1x_vxwibw.png" />
                                <p>My NeuCoins</p>
                            </div>
                            <div>
                                <p>Balance: 0 NeuCoin</p>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.neucoins}>
                            <p>35 NeuCoins to be earned on this order*</p>
                        </div>
                 </div>
                   <Total/>
                    <div className={styles.proceed}>
                            <Button styles={button}/>
                    </div>
               </div>
        </div>
    )
}