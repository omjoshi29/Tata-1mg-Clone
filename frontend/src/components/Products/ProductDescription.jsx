import React from "react";
import descstyles from "./ProductDescription.module.css";
import { products } from "./productsData";

const ProductDescription = () => {
  let prod = products[0];
  let highlights = prod.prodHighlights;
  let higharr = highlights.split("\n");
  let desc = prod.longDesc;
  let descarr = desc.split("\n");
  let random = Math.floor(Math.random() * 150) + 50;
  const quantarr = Array.from({ length: 30 }, (_, index) => index + 1);

  return (
    <>
      <div className={descstyles.descTopDiv}>
        <div className={descstyles.descImgDiv}>
          <img
            src={prod.imageUrl}
            alt={prod.productName}
            className={descstyles.prodimg}
          />
        </div>

        <div className={descstyles.highlightDiv}>
          <h3>{prod.productName}</h3>
          <p className={descstyles.brand}>{prod.brand}</p>
          <div className={descstyles.ratingDiv}>
            <div>{prod.ratings}&nbsp;★</div>
            <p>{prod.numberOfRatings}</p>
          </div>
          <p>Product Highlights</p>
          <div>
            {higharr.map((el, i) => {
              return (
                <p key={i} style={{ paddingBottom: "6px", fontSize: "14px" }}>
                  {el}
                </p>
              );
            })}
          </div>
        </div>

        <div className={descstyles.addToCartDiv}>
          <div className={descstyles.randomDiv}>
            <img src="https://www.1mg.com/images/social_cue.svg" />
            <p>&nbsp; {random} people bought this recently</p>
          </div>
          <div className={descstyles.priceDiv}>
            <p style={{ fontSize: "24px" }}>₹{prod.price}</p>
            <p
              style={{
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
                color: "grey",
              }}
            >
              MRP&nbsp;{prod.strikedPrice}
            </p>
            <p className={descstyles.discount}>{prod.discount}</p>
          </div>
          <p style={{ fontSize: "14px", color: "grey" }}>
            Inclusive of all taxes
          </p>
          <div className={descstyles.quantDiv}>
            <p>Select quantity:&nbsp;</p>
            <select value="">
              {quantarr.map((el, i) => {
                return (
                  <option value={el} key={i}>
                    {el}&nbsp;units
                  </option>
                );
              })}
            </select>
          </div>
          <button className={descstyles.cartbtn}>ADD TO CART</button>
        </div>
      </div>

      <div className={descstyles.longDesc}>
        <h3 style={{ paddingBottom: "25px" }}>
          Information about {prod.productName}:
        </h3>
        {descarr.map((el, i) => {
          return (
            <p key={i} style={{ paddingBottom: "6px" }}>
              {el}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default ProductDescription;
