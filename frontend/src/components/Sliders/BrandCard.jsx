import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  /* border: 1px solid black; */
  border-radius: 5px;

  height: 210px;

  padding: 0px 8px;
  background-color: white;
  width: 175px;

  &:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    /* border: 1px solid red; */
    justify-content: center;
    box-sizing: border-box;
    padding: 20px;
    color: #212121;
    span {
      /* height: 120px;
      width: 120px; */
      /* border: 1px solid black; */
      img {
        width: 100px;
      }
      margin-bottom: 10px;
    }

    p {
      text-align: center;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const BrandCard = ({ imgUrl, title, link }) => {
  return (
    <Wrapper>
      <Link to={link ? link : "#"}>
        <span>
          <img src={imgUrl} alt="imagename" />
        </span>
        <p>{title}</p>
      </Link>
    </Wrapper>
  );
};

export default BrandCard;
