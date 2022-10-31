import React from "react";

export default function ServicesIndividual({service}) {
  return (
    <div className="col-lg-6 py-2" data-aos="zoom-out-right">
      <div className="row">
        <div className=" col-md-2 my-3">
          <img
            src={service.image}
            className="img-fluid service-img"
            alt=""
          />
        </div>
        <div className="col-md-10 my-3">
          <h4 className="primary-text-color">{service.heading}</h4>
          <p>{service.para}
          </p>
        </div>
      </div>
    </div>
  );
}
