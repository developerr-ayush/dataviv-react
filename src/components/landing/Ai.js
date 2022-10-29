import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const options = {
  items: 3,
  center: true,
  loop: true,
};
export default function Ai({ content }) {
  return (
    <div className="software">
      <div className="container">
        <div className="row align-items-center overflow-hidden">
          <div className="col-lg-6 my-5" data-aos="fade-right">
            <div className="image">
              <img src={content.image} alt="ai tech image" className="shadow" />
              <div className="play"></div>
            </div>
          </div>
          <div className="col-lg-6 my-5 text-white vr-sw" data-aos="fade-left">
            <h2 className="text-center mb-3">{content.heading}</h2>
            <p>{content.para}</p>
            <OwlCarousel className="text-slider mt-4" {...options}>
              <div>
                <h3>{content.carousel[0]}</h3>
              </div>
              <div>
                <h3>{content.carousel[1]}</h3>
              </div>
              <div>
                <h3>{content.carousel[2]}</h3>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
