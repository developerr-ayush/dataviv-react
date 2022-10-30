import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

  const options = {
    
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
    center: true,
    loop: true,
    margin:20,
  };

export default function Projects() {
  return (
    <div className="scene">
      <div className="container text-white" data-aos="fade-up">
        <h2>Projects</h2>
        <p className="primary-text-color">
          SHOWCASE OF AWESOME WORKS WE HAVE DONE FOR OUR CLIENTS
        </p>
        <OwlCarousel className="owl-theme clients" {...options}>
          <div className="item">
            <div
              className="
                images
                zoom-effect
                my-4
                carousel-projects
                project-carousel-1
              "
            ></div>
            <h5>Computer vision in Retail</h5>
          </div>

          <div className="item">
            <div
              className="
                images
                zoom-effect
                my-4
                carousel-projects
                project-carousel-2
              "
            ></div>
            <h5>Image processing in Medical</h5>
          </div>

          <div className="item">
            <div
              className="
                images
                zoom-effect
                my-4
                carousel-projects
                project-carousel-3
              "
            ></div>
            <h5>Attendance management in office</h5>
          </div>

          <div className="item">
            <div
              className="
                images
                zoom-effect
                my-4
                carousel-projects
                project-carousel-4
              "
            ></div>
            <h5>Virtual Reality in Education</h5>
          </div>
          <div className="item">
            <div
              className="
                images
                zoom-effect
                my-4
                carousel-projects
                project-carousel-5
              "
            ></div>
            <h5>Parachute Experience in VR</h5>
          </div>

          <div className="item">
            <div
              className="
                images
                zoom-effect
                my-4
                carousel-projects
                project-carousel-6
              "
            ></div>
            <h5>Conversational AI for Education</h5>
          </div>

          <div className="item">
            <div
              className="
                images
                zoom-effect
                my-4
                carousel-projects
                project-carousel-7
              "
            ></div>
            <h5>Large Scale Connected Platforms</h5>
          </div>

          <div className="item">
            <div
              className="
                images
                zoom-effect
                my-4
                carousel-projects
                project-carousel-8
              "
            ></div>
            <h5>Marketplace/Multi Commerce platforms</h5>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}
