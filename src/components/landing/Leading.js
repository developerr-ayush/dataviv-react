import React from "react";
import icon1 from "../../images/icon/service-1.png";
import icon2 from "../../images/icon/service-2.png";
import icon3 from "../../images/icon/service-3.png";
export default function Leading() {
  return (
    <section className="w-100 primary-bg-color features add-padd">
      <div className="container">
        <div className="row text-white align-items-center">
          <div className="col-12 text-center">
            <h2>LEADING FROM THE FRONT</h2>
            <p className="primary-text-color">
              Virtual and Augmented Reality experinces instead
            </p>
          </div>
          <div className="col-lg-4 text-center my-5" data-aos="fade-up">
            <img src={icon1} height="50px" alt="icon-1" />
            <h3 className="primary-text-color">Best In Class Marketing</h3>
            <p>
              Artificial Intelligence Backed Digital Marketing and Social Media
              committed to generating the maximum ROI.
            </p>
          </div>
          <div className="col-lg-4 text-center my-5" data-aos="flip-left">
            <img src={icon2} height="50px" alt="icon-2" />
            <h3 className="primary-text-color">Cutting Edge Technology</h3>
            <p>
              Technology Product Creation ranging from AR/VR, AI & ML, Computer
              Vision, Mobile Apps, Websites, and more.
            </p>
          </div>
          <div className="col-lg-4 text-center my-5" data-aos="fade-up">
            <img src={icon3} height="50px" alt="icon-3" />
            <h3 className="primary-text-color">Award Winning Products</h3>
            <p>
              Legal Case Success Prediction, Content success prediction for OTT,
              and several products live in market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
