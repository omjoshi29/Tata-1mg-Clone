import React from "react"
import styles from "./cart.module.css"
export const Delivery = ()=>{
    
    return (
        <div className={styles.mainchoose}>
             <div className={styles.choose}>
                 <p>Choose delivery option(s)</p>
                 <div>
                     <div className={styles.choose1}>
                         <p>Shipment 1 out of 2</p>
                         <div className={styles.choose2}>
                             <img width="40px" src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/ym5cke0aftsrelfivdzz.jpg"/>
                             <div>
                                 <p>Siddhayu Calciactiv Advanced Natural Calcium Supplement Tablet</p>
                                 <p>bottle of 60 tablets</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className={styles.between}>
                     <p>Choose a delivery speed</p>
                     <p className={styles.between1}>
                         <img width="30px" src="https://image.shutterstock.com/image-vector/screen-record-button-isolated-on-600w-1457333453.jpg"/>
                         <p>Between 25 - 27 July</p>
                     </p>
                 </div>
             </div>
             <div className={styles.rightchoose}>
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
               
                <div>
                    CONTINUE
                </div>
             
             </div>
             </div>
        </div>
    )
}