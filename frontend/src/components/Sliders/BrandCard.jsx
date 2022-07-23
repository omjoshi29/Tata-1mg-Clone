import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  /* border: 1px solid black; */
  border-radius: 5px;

  height: 210px;
  box-sizing: border-box;
  width: 175px;
  padding: 10px;

  &:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #212121;
    span {
      img {
        width: 120px;
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
