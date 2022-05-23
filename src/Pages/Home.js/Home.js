import React from "react";
import Footer from "../Shared/Footer";
import Carousel from "./Carousel";
import Products from "./Products";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Products></Products>

      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section1></Section1>
      <Footer></Footer>
    </div>
  );
};

export default Home;
