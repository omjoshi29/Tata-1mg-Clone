import React from "react";
import { FooterWrapper } from "./Footer.styled";
import Button from "../Button";
import { Link } from "react-router-dom";

import FacebookIcon from "../../assets/Icons/socials/facebook.svg";
import LinkedINIcon from "../../assets/Icons/socials/linkedin.svg";
import MediumIcon from "../../assets/Icons/socials/medium.svg";
import TwitterIcom from "../../assets/Icons/socials/twitter.svg";
import YoutubeIcon from "../../assets/Icons/socials/youtube.svg";
import GetItGoogle from "../../assets/Icons/google-play-badge.png";
import GetAppStore from "../../assets/Icons/appstore.png";

const Footer = () => {
  const sendLinkB1 = {
    bg: "#ff6f61",
    text: "Send Link",
    width: "110px",
    br: "3px",

    color: "#ffffff",
    height: "38px",
    fontSize: "14px",
  };

  const signUpB2 = {
    bg: "#ff6f61",
    text: "Sign UP",
    width: "97px",
    br: "3px",
    fontWeight: "Bold",
    color: "#ffffff",
    height: "40px",
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
            <Button styles={sendLinkB1} />
          </div>
        </div>
      </div>
      {/* Part - 2 */}
      <div className="footerP2Con">
        <div className="links">
          {/* 1st List */}
          <div className="listContainer">
            <p>Know Us</p>
            <ul>
              <li>
                <Link to={"#"}>About Us</Link>
              </li>
              <li>
                <Link to={"#"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"#"}>Press Coverage</Link>
              </li>
              <li>
                <Link to={"#"}>Careers</Link>
              </li>
              <li>
                <Link to={"#"}>Business Partership</Link>
              </li>
              <li>
                <Link to={"#"}>Became a Health Partner</Link>
              </li>
              <li>
                <Link to={"#"}>Corporate Governance</Link>
              </li>
            </ul>
          </div>

          {/* 2nd List */}
          <div className="listContainer">
            <p>Our Policies</p>
            <ul>
              <li>
                <Link to={"#"}>Privecy Policy</Link>
              </li>
              <li>
                <Link to={"#"}>Terms ans Conditions</Link>
              </li>
              <li>
                <Link to={"#"}>Editorial Policy</Link>
              </li>
              <li>
                <Link to={"#"}>Return Policy</Link>
              </li>
              <li>
                <Link to={"#"}>IP Policy</Link>
              </li>
              <li>
                <Link to={"#"}>Grivance Redressal Policy</Link>
              </li>
            </ul>
          </div>
          {/* 3rd List */}
          <div className="listContainer">
            <p>Our Services</p>
            <ul>
              <li>
                <Link to={"#"}>Order Medicines</Link>
              </li>
              <li>
                <Link to={"#"}>Book Lab Test</Link>
              </li>
              <li>
                <Link to={"#"}>Consult a Doctor</Link>
              </li>
              <li>
                <Link to={"#"}>Ayurveda Articles</Link>
              </li>
              <li>
                <Link to={"#"}>Hindi Articles</Link>
              </li>
              <li>
                <Link to={"#"}>Care Plan</Link>
              </li>
            </ul>
          </div>
          {/* 4th List */}
          <div className="connectContainer">
            <p>Connect</p>
            <ul>
              <li>
                <Link to={"#"}>Social Links</Link>
              </li>
              <li className="socials">
                <span>
                  <a
                    target={"_blank"}
                    href="https://www.facebook.com/1mgOfficial"
                  >
                    <img src={FacebookIcon} alt="" />
                  </a>
                </span>
                <span>
                  <a target={"_blank"} href="https://twitter.com/1mgofficial">
                    <img src={TwitterIcom} alt="" />
                  </a>
                </span>
                <span>
                  <a
                    target={"_blank"}
                    href="https://www.youtube.com/c/1mgofficial"
                  >
                    <img src={YoutubeIcon} alt="" />
                  </a>
                </span>
                <span>
                  <a
                    target={"_blank"}
                    href="https://www.linkedin.com/company/1mg"
                  >
                    <img src={LinkedINIcon} alt="" />
                  </a>
                </span>
                <span>
                  <a target={"_blank"} href="https://medium.com/1mgofficial">
                    <img src={MediumIcon} alt="" />
                  </a>
                </span>
              </li>
              <li>
                <Link to={"#"}>Want daily dose of health?</Link>
              </li>
              <li>
                <Link to={"#"}>
                  <Button styles={signUpB2} />
                </Link>
              </li>
            </ul>
          </div>
          {/* 5th List */}
          <div className="getAppContainer">
            <h5>Download App</h5>
            <ul>
              <li className="getAppIcons">
                <a
                  href={
                    "https://play.google.com/store/apps/details?id=com.aranoah.healthkart.plus"
                  }
                  target={"_blank"}
                >
                  <img src={GetItGoogle} alt="" />
                </a>
              </li>
              <li className="getAppIcons">
                <a
                  href={"https://itunes.apple.com/in/app/1mg/id554578419?mt=8"}
                  target={"_blank"}
                >
                  <img src={GetAppStore} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
