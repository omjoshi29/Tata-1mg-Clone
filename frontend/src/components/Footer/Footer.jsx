import React from "react";
import { FooterWrapper } from "./Footer.styled";
import Button from "../Button";
const Footer = () => {
  const styles = {
    bg: "#ff6f61",
    text: "Send Link",
    width: "140px",
    br: "3px",

    color: "#ffffff",
    height: "38px",
    fontSize: "14px",
  };

  return (
    <FooterWrapper>
      {/* Part - 1 */}
      <div className="footerP1Con">
        <div className="heading">
          <p>INDIA’S LARGEST HEALTHCARE PLATFORM</p>
        </div>
        <div className="downloads">
          <span>
            <strong className="strong">260m+</strong>
            <p>Visitors</p>
          </span>
          <span>
            <strong className="strong">31m+</strong>
            <p>Orders delivered</p>
          </span>
          <span>
            <strong className="strong">1800+</strong>
            <p>Cities</p>
          </span>
        </div>
        <div className="divider"></div>
        <div className="mailToUse">
          <p>Get the link to download App</p>
          <div className="emailInput">
            <input type="number" id="phone" placeholder="Enter Phone Number" />
            <Button styles={styles} />
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
