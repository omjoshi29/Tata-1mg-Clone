import { useState } from "react"
import styles from "./cart.module.css"

export const Cart = ()=>{
    const [count,setCount] = useState(1)
    let price = 200*count
    return (
        <div className={styles.Main}>
            <div className={styles.leftcart}>
                <div>
                    <p>Items NOT Requiring Prescription (1)</p>
                    <div className={styles.cartdata}>
                        <div>
                           <h3>HealthKart HK Vitals Biotin Tablet</h3>
                           <h3>{price}</h3> 
                        </div>
                        <div>
                           <p>bottle of 90 tablets</p>
                           <s>MRP₹699</s>
                        </div>
                        <div>
                            <div className={styles.deleteCart}>
                              <img width={"20px"} src ="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"/>
                              <p>Remove</p>
                            </div>
                          
                           <div className={styles.deletecart}>
                               <img onClick={()=>setCount(count-1)} src="https://www.1mg.com/images/minus-cart.svg"/>
                               <p>{count}</p>
                               <img onClick={()=>setCount(count+1)} src="https://www.1mg.com/images/plus-cart.svg"/>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rightcart}>

            </div>  
        </div>
    )
}