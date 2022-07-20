import React from "react";
import OneMgLogo from "../../assets/Icons/logo.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CartICon from "../../assets/Icons/cart.svg";
const HeaderP1 = () => {
  const params = useParams();

  return (
    <div className="header_1Con">
      <div className="firstPart">
        <div className="logoCon">
          <img src={OneMgLogo} alt="" />
        </div>
        <ul className="tabList">
          <li>
            <Link to="#">MEDICINES</Link>
          </li>
          <li>
            <Link to="#">LAB TESTS</Link>
            <span className="badge">SAFE</span>
          </li>
          <li>
            <Link to="#">CONSULT DOCTORS</Link>
          </li>
          <li>
            <Link to="#">COVID-19</Link>
          </li>
          <li>
            <Link to="#">AYURVEDA</Link>
          </li>
          <li>
            <Link to="#">CARE PLAN</Link>
            <span className="badge">SAVE MORE</span>
          </li>
        </ul>
      </div>
      <div className="secondPart">
        <ul className="list">
          <li>
            <Link to={"#"}>Login</Link> | <Link to={"#"}>Sign Up</Link>
          </li>
          <li>
            <Link to={"#"}>Offers</Link>
          </li>
          <li>
            <Link to={"#"}>
              <img width={"24px"} src={CartICon} alt="" />
            </Link>
          </li>
          <li>
            <Link to={"#"}>Need Help?</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderP1;
