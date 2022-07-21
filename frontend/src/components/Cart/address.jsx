import styles from "./cart.module.css";
import React, { useState } from "react";
import { Checkbox } from "pretty-checkbox-react";
// import '@djthoms/pretty-checkbox';
export const Address = () => {
  const [form, setForm] = useState({});
  const [change, setChange] = useState(false);
  const [add, setAdd] = useState(false);
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handeaddAddress = () => {
    setChange(false);
  };
  const handleSave = () => {
    setChange(true);
  };
  return (
    <div>
      {change || add ? (
        <div className={styles.addressdata}>
          <div className={styles.addressdata1}>
            <div>
              <img
                width="30px"
                src="https://image.shutterstock.com/image-vector/screen-record-button-isolated-on-600w-1457333453.jpg"
              />
              <p>Home</p>
            </div>
            <p>nagesh kumawat</p>
            <p>1234567890</p>
            <p>Address</p>
            <p>Ratlam Madhya pradesh-457339</p>
          </div>
          <div onClick={handeaddAddress}>+ ADD NEW ADDRESS</div>
          <div>CONTINUE</div>
        </div>
      ) : (
        <div className={styles.address}>
          <p>Add New Adddress</p>
          <div className={styles.addressform}>
            <form className={styles.form}>
              <input
                type="text"
                name="address"
                placeholder="Flat Number Building Name , Street/Locality"
                onChange={handleFormChange}
              />
              <br />
              <input
                type="text"
                name="landmark"
                placeholder="Landmark(optional)"
                onChange={handleFormChange}
              />
              <br />
              <input
                type="number"
                name="pincode"
                placeholder="Pincode"
                onChange={handleFormChange}
              />
              <br />
              <input
                type="text"
                name="locality"
                placeholder="Locality"
                onChange={handleFormChange}
              />
              <br />
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={handleFormChange}
              />
              <br />
              <input type="text" name="state" placeholder="State" />
              <br />
              <input
                type="text"
                name="customername"
                placeholder="Customer Name"
                onChange={handleFormChange}
              />
              <br />
              <input
                type="number"
                name="mobile"
                placeholder="10 Digit Mobile Number"
                onChange={handleFormChange}
              />
              <Checkbox value="Home">Home</Checkbox>
              <Checkbox value="Office">Office</Checkbox>
              <Checkbox value="Other">Other</Checkbox>
            </form>
            <div className={styles.savedata}>
              <p>CANCLE</p>
              <p onClick={handleSave}>SAVE</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
