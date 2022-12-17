import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../images/3.jpg";
import img2 from "../images/4.jpg";

const Services = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full stack</p>
        </div>
        <div>
          <img src={img2} alt="Item2" />
          <p className="legend">peer-to-peer programming</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
