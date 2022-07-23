import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  *:focus {
    outline: 0;
  }

  margin: auto;
  /* border: 1px solid black; */

  /* margin-top: 250px; */
  /* width: 50%; */

  height: ${(props) => (props.height ? props.height : "auto")};
  width: ${(props) => (props.width ? props.width : "auto")};
  /* margin: auto; */
  position: relative;
  img {
    height: 100%;
    width: 100%;
  }
  ul {
    bottom: 12px;

    position: absolute;
  }

  img {
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

export const BannerSlider = ({ data, height, width, arrows }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows,
    //    nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />,
  };

  return (
    <Wrapper height={height} width={width}>
      <Slider {...settings}>
        {data.map((el, i) => {
          return (
            <div key={i}>
              <Link to={el.link}>
                <img src={el.imgUrl} alt="" />
              </Link>
            </div>
          );
        })}
      </Slider>
    </Wrapper>
  );
};
