import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TataLabs from "../../../assets/Images/homepage/tatalabs.webp";
import { AiFillStar } from "react-icons/ai";
const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;

  /* height: ${(props) => (props.height ? props.height : "210px")}; */
  height: 154px;
  width: 265px;
  /* padding: 0px 0px; */
  background-color: white;
  /* width: ${(props) => (props.width ? props.width : "auto")}; */
  box-sizing: border-box;
  padding: ${(props) => (props.padding ? props.padding : "0")};

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }
  a {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    height: 100%;
    text-decoration: none;
    border: 1px solid red;
    
    /* justify-content: center; */

    h4{
        font-size: 14px;
        line-height: 20px;
        color: #212121;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

    }
    p{
        font-size: 12px;
        line-height: 17px;
        margin-top: 6px;
        color: #757575;
    }

    .ratingCon{
        height: 50px;
        border: 1px solid black;
        display: flex;
        align-items: center;
        /* flex-direction: column; */

        .tataLabsCon{
            width: 32%;
            border: 1px solid var(--border);
            img{
                height: 50px;
                transform: scale(1.2);              
            }

        }

        .ratingBadge{
            width: 34px;
            height: 18px;
            color:#ffffff ;
        }
    }
  
  }
`;

const BrandCard = ({
  imgUrl,
  title,
  desc,
  link,
  rating,
  price,
  cardHeight,
  strikeOfPrice,
  discount,
  cardWidth,
  cardPadding,
}) => {
  return (
    <Wrapper height={cardHeight} width={cardWidth} padding={cardPadding}>
      <Link to={link ? link : "#"}>
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="ratingCon">
          <span className="tataLabsCon">
            <img src={TataLabs} alt="tatalabs" />
          </span>
          <span className="ratingBadge">
            {rating} <AiFillStar />
          </span>
          <span>ISO</span>
        </div>
      </Link>
    </Wrapper>
  );
};

export default BrandCard;
