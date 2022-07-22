import React from "react";
import { BannerSlider } from "../components/Sliders/BannerSlider";
import { BrandsSlider } from "../components/Sliders/BrandsSlider";
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

const Home = () => {
  const data1 = {
    data: Banner,
    height: "250px",
    width: "1270px",
    arrows: false,
  };

  const data2 = {
    data: BrandsData,
    height: "210px",
    width: "1270px",
    arrows: true,
  };

  return (
    <div>
      <h1>Banner Slider</h1>
      <BannerSlider {...data1} />
      <h2>Brands Slider</h2>
      <BrandsSlider {...data2} />
    </div>
  );
};

export default Home;
