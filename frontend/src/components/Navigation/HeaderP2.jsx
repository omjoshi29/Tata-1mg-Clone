import React, { useState } from "react";
import { ImLocation } from "react-icons/im";
import { IoMdLocate } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import Button from "../Button";
import FireIcon from "../../assets/Icons/lightningIcon.svg";
const HeaderP2 = () => {
  const [location, setLocation] = useState("New Delhi");
  const styles = {
    bg: "#ff6f61",
    text: "Quick Order",
    width: "140px",
    br: "3px",
    fontWeight: "bold",
    color: "#ffffff",
    height: "100%",
    fontSize: "16px",
  };
  return (
    <div className="header_2Con">
      <div className="firstCon">
        <div className="container">
          {/* Location */}
          <div className="locationCon">
            <span>
              <ImLocation />
            </span>
            <input type="text" className="location" value={location} />
            <span style={{ cursor: "pointer" }}>
              <IoMdLocate />
            </span>
          </div>
          {/*Search bar */}
          <div className="searchbarCon">
            <input
              type="text"
              className="searchbar"
              placeholder="Search for Medicines and Health Products"
            />
            <span>
              <BiSearch />
            </span>
          </div>
        </div>
      </div>
      <div className="secondCon">
        <div className="container">
          <span>
            <img src={FireIcon} alt="" />
          </span>
          <p>QUICK BUY! Get 25% off on medicines*</p>
          <Button styles={styles} />
        </div>
      </div>
    </div>
  );
};

export default HeaderP2;
