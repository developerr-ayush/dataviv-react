import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import "./App.scss";
import "./components/style.scss";

import AOS from "aos";
import "aos/dist/aos.css";

import Banner from "./components/header/Banner";

import Footer from "./components/header/Footer";
import Landing from "./components/Landing";
import About from "./components/About";
import Navbar from "./components/header/Navbar";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";

import serviceImage1 from "./images/serviceItem/service1.png";
import serviceImage2 from "./images/serviceItem/service2.png";
import serviceImage3 from "./images/serviceItem/service3.png";
import serviceImage4 from "./images/serviceItem/service4.png";
import serviceImage5 from "./images/serviceItem/service5.png";
import serviceImage6 from "./images/serviceItem/service6.png";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  let a = window.location.pathname;
  a = a.replace("/", "");
  console.log(a);
  const [pageobject, setpageobject] = useState(a);
  function page(object) {
    switch (object) {
      case "index":
        setpageobject("index");
        break;

      case "about":
        setpageobject("about");
        break;

      case "service":
        setpageobject("service");
        break;

      case "portfolio":
        setpageobject("portfolio");
        break;

      case "contact":
        setpageobject("contact");
        break;

      default:
        setpageobject(a);
        break;
    }
  }

  let servicesInd = [
    {
      image: serviceImage1,
      heading: "Data Engineering",
      para: "Taking your data to generate the level of prediction you need to make business decisions. Be it traffic analytics, financial models or other data related solutions. Understanding and Processing it systematically as per client requirement. Practical application of data collections and analysis.",
    },
    {
      image:serviceImage2,
      heading:'Software Development',
      para:'Technology as applications of websites to achieve your business goals. Aim to produce high- quality software that meets or exceeds customer expectations, within timelines and cost estimates.',
    },
    {
      image:serviceImage3,
      heading:'Internet of Things',
      para:'Hardware integrated with the cloud to achieve the solution we need including smart medical devices, watches, and more. Leading to efficiency & productivity, cost reduction, business opportunity and customer experience.',
    },
    {
      image:serviceImage4,
      heading:'Computer Vision',
      para:'Custom Computer Vision Modules to track required behavior and provide analytics. Improvise your business planning and predictions by collecting real time data and understand customer sentiments.',
    },
    {
      image:serviceImage5,
      heading:'Image Processin',
      para:'Process images to detect any blocks for important segments medical, Jewellery and other purposes. Working on details and accuracy for producing the best possible output for your business.',
    },
    {
      image:serviceImage6,
      heading:'Augmented Reality/Virtual Reality',
      para:'Custom augmented reality and virtual reality applications to provide you the experience desired on devices of choice. Unlocking the potential of Augmented reality for exponential growth in revenues.',
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Navbar page={page} />
        <Banner page={pageobject} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service service={servicesInd}/>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
