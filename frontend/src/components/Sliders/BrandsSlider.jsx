import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import BrandCard from "./BrandCard";
const Wrapper = styled.div`
  *:focus {
    outline: 0;
  }
  margin: auto;
  border: 1px solid black;
  height: ${(props) => (props.height ? props.height : "auto")};
  width: ${(props) => (props.width ? props.width : "auto")};
  /* margin: auto; */

  img {
    height: 100%;
    width: 100%;
  }

  /* the slides */
  .slick-slide {
    margin: 0 -10px;
  }
  /* the parent */
  .slick-list {
    margin: 0 10px;
  }
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export const BrandsSlider = ({ data, height, width, arrows }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Wrapper height={height} width={width}>
      <Slider {...settings}>
        {data.map((el) => {
          return <BrandCard {...el} />;
        })}
      </Slider>
    </Wrapper>
  );
};
