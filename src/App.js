import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';
import './components/style.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from './components/header/Banner';

import Footer from './components/header/Footer';
import Landing from "./components/Landing";
import About from "./components/About";
import Navbar from "./components/header/Navbar";


function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <BrowserRouter>
      
        <Navbar />

        <Banner />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
