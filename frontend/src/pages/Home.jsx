import React from "react";
import { BannerSlider } from "../components/Sliders/BannerSlider/BannerSlider";
import { BrandsSlider } from "../components/Sliders/BrandsSlider/BrandsSlider";
import { HomeWrapper } from "./Home.styled";
import RightBanner from "../assets/Images/HomePageBanner/right.webp";
import Careplan from "../assets/Images/homepage/careplan.png";
import Button from "../components/Button";
// import { BrandsSlider } from "../components/Sliders/BrandsSlider";

let Banner = [
  {
    imgUrl:
      "https://github.com/gautam6023/Storage-resources-/blob/main/1mg%20Storage/Banner%20Images/1st.png?raw=true",
    link: "#",
  },
  {
    imgUrl:
      "https://github.com/gautam6023/Storage-resources-/blob/main/1mg%20Storage/Banner%20Images/2nd.jpeg?raw=true",
    link: "#",
  },
  {
    imgUrl:
      "https://github.com/gautam6023/Storage-resources-/blob/main/1mg%20Storage/Banner%20Images/3rd.png?raw=true",
    link: "#",
  },
  {
    imgUrl:
      "https://github.com/gautam6023/Storage-resources-/blob/main/1mg%20Storage/Banner%20Images/4th.png?raw=true",
    link: "#",
  },
  {
    imgUrl:
      "https://github.com/gautam6023/Storage-resources-/blob/main/1mg%20Storage/Banner%20Images/5th.png?raw=true",
    link: "#",
  },
  {
    imgUrl:
      "https://github.com/gautam6023/Storage-resources-/blob/main/1mg%20Storage/Banner%20Images/7th.jpeg?raw=true",
    link: "#",
  },
  {
    imgUrl:
      "https://github.com/gautam6023/Storage-resources-/blob/main/1mg%20Storage/Banner%20Images/8th.png?raw=true",
    link: "#",
  },
];

let BrandsData = [
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/t0t6xw4ylmxeewhgfkmp.jpg",
    title: "Dr Willmar Schwabe India",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/i0wi0yt5wo90kggfzjsn.jpg",
    title: "Accu-Chek",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/g21x5fzignndb0ymzv8h.jpg",
    title: "MuscleBlaze",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/oi0ur8lo58nku2ixbqib.png",
    title: "Kapiva Ayurveda",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/haqfpvbtgym8a6cmx3pz.png",
    title: "Baidyanath(Nagpur)",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/hkm1q1azbrn668gdu062.png",
    title: "Pentasure",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/kevury9rkljlaiq5s66c.png",
    title: "Nivea",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/qbrvpif3g5sboyllfaxm.jpg",
    title: "Jiva Ayurveda",
  },
  {
    imgUrl:
      "https://onemg.gumlet.io/c_fit,f_auto,h_150,q_auto,a_ignore,w_150/q6eiu5807jpnbagqgrzv.jpg",
    title: "Abzorb Products",
  },
];

export const Home = () => {
  //Data of banners and sliders
  const data1 = {
    data: Banner,
    height: "250px",
    width: "100%",
    arrows: false,
  };

  const brandsProp = {
    data: BrandsData,
    height: "210px",
    width: "1280px",
    arrows: true,
  };

  //Button
  const seeAllButton = {
    bg: "#ff6f61",
    text: "SEE ALL",
    width: "63px",
    br: "3px",
    fontWeight: "Bold",
    color: "#ffffff",
    height: "27px",
    fontSize: "12px",
  };

  return (
    <HomeWrapper>
      {/* <h1>Banner Slider</h1>
      <BannerSlider {...data1} />
      <h2>Brands Slider</h2>
      <BrandsSlider {...data2} /> */}

      {/* Top Courosal with banner */}
      <div className="topBanner">
        <div className="bannerSliderContainer">
          <BannerSlider {...data1} />
        </div>
        <div className="rightBanner">
          <img src={RightBanner} alt="" />
        </div>
      </div>
      {/* Heading  */}
      <div className="headingOf1mg">
        <h1>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</h1>
      </div>
      {/* Add Care Plan */}
      <div className="addOfCarePlan">
        <span>
          <img src={Careplan} alt="careplan" />
        </span>
      </div>
      {/* Featured Brands */}
      <div className="featuredBrands">
        {/* Heading of Comp */}
        <div className="headingOfComponent">
          <span>Featured Brands</span>
          <Button styles={seeAllButton} />
        </div>
        {/* Slider Container */}
        <div className="sliderContaier">
          <BrandsSlider {...brandsProp} />
        </div>
      </div>
      {/* Full body health Checkup */}
      <div className="featuredBrands">
        {/* Heading of Comp */}
        <div className="headingOfComponent">
          <span>Full body health checkups</span>
          <Button styles={seeAllButton} />
        </div>
        {/* Slider Container */}
        <div className="sliderContaier" style={{ height: "184px" }}>
          {/* <BrandsSlider {...brandsProp} /> */}
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
