import React from "react";
import Cuveetop from "../designs/Cuveetop";
import Vrimage from "../../images/image-12.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Cuveebottom from "../designs/Cuveebottom";

const options = {
  items: 3,
  center: true,
  loop: true,
};
export default function Vr() {
  return (
    <>
    <div className="scene add-bg">
      <Cuveetop />
      <div className="container">
        <div className="row align-items-center flex-wrap-reverse overflow-hidden">
          <div className="col-lg-6 my-5" data-aos="fade-right">
            <h2>Virtual and Augmented Reality</h2>
            <p>
              Ready to make a mini VR game online, instantly? Use our
              free-to-try 3D game development software to design, develop and
              share your mini virtual reality games online in minutes.
            </p>
            <OwlCarousel className="text-slider mt-5" {...options}>
              <div>
                <h3>Real Estate Walk through</h3>
              </div>
              <div>
                <h3>Immersive Education content</h3>
              </div>
              <div>
                <h3>Augmented/ Virtual Reality Experiences.</h3>
              </div>
            </OwlCarousel>
          </div>
          <div className="col-lg-6 my-5" data-aos="fade-left">
            <div className="image">
              <img src={Vrimage} alt="tech" className="shadow add-bg-col" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Cuveebottom/>
    </>
  );
}
