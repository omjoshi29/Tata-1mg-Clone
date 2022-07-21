import React from "react";
import { products } from "./productsData.js";
import prodstyles from "./products.module.css";

const Products = () => {
  let obj1 = {};
  products.map((el) => {
    if (obj1[el.brand] === undefined) {
      obj1[el.brand] = 1;
    } else {
      obj1[el.brand] += 1;
    }
  });
  let brands = Object.keys(obj1);
  let numbrands = Object.values(obj1);

  let obj2 = {};
  products.map((el) => {
    let num = parseInt(el.discount);
    if (num < 10) {
      if (obj2["Less than 10%"] === undefined) {
        obj2["Less than 10%"] = 1;
      } else {
        obj2["Less than 10%"] += 1;
      }
    }
    if (num >= 10) {
      if (obj2["10% and above"] === undefined) {
        obj2["10% and above"] = 1;
      } else {
        obj2["10% and above"] += 1;
      }
    }
    if (num >= 20) {
      if (obj2["20% and above"] === undefined) {
        obj2["20% and above"] = 1;
      } else {
        obj2["20% and above"] += 1;
      }
    }
    if (num >= 30) {
      if (obj2["30% and above"] === undefined) {
        obj2["30% and above"] = 1;
      } else {
        obj2["30% and above"] += 1;
      }
    }
  });
  let discount = Object.keys(obj2);
  let numdiscount = Object.values(obj2);

  return (
    <div className={prodstyles.prodpagediv}>
      <div className={prodstyles.filterdiv}>
        <div
          style={{
            padding: "15px",
            borderBottom: "1px solid silver",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          FILTER
        </div>

        <div style={{ padding: "15px", borderBottom: "1px solid silver" }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            BRANDS
          </div>
          {brands.map((el, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  paddingTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ width: "15px", height: "15px" }}
                  />
                  <p style={{ paddingLeft: "10px" }}>{el}</p>
                </div>
                <p>{numbrands[i]}</p>
              </div>
            );
          })}
        </div>

        <div style={{ padding: "15px" }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            DISCOUNTS
          </div>
          {discount.map((el, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  paddingTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ width: "15px", height: "15px" }}
                  />
                  <p style={{ paddingLeft: "10px" }}>{el}</p>
                </div>
                <p>{numdiscount[i]}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={prodstyles.mainprodcontainer}>
        <div className={prodstyles.prodtopdiv}>
          <div style={{ fontSize: "24px", lineHeight: "34px" }}>
            All Products
          </div>
          <div className={prodstyles.prodsortdiv}>
            <p>Sort By &nbsp;</p>
            <div>
              <select value="" className={prodstyles.sortselect}>
                <option value="rel">Relevance</option>
                <option value="plth">Price: Low to High</option>
                <option value="phtl">Price: High to Low</option>
                <option value="rlth">Rating: Low to High</option>
                <option value="rhtl">Rating: High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className={prodstyles.prodContainer}>
          {products.map((el, i) => {
            return (
              <div key={i} className={prodstyles.prodBox}>
                <img src={el.imageUrl} alt={el.productName} />
                <p className={prodstyles.prodName}>{el.productName}</p>
                <p className={prodstyles.prodDesc}>{el.shortDesc}</p>

                <div className={prodstyles.ratingDiv}>
                  <div>{el.ratings}&nbsp;★</div>
                  <p>{el.numberOfRatings}</p>
                </div>

                <div className={prodstyles.ratingDiv}>
                  <p>MRP&nbsp;{el.strikedPrice}</p>
                  <p id={prodstyles.discount}>{el.discount}</p>
                </div>

                <div className={prodstyles.priceDiv}>
                  <p>₹{el.price}</p>
                  <button>ADD</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
