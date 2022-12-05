import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LoginModal from "./components/LoginModal";

function App() {
  const [show, setShow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const servicesRef = useRef();
  const aboutRef = useRef();
  const pricingRef = useRef();
  const newsLetterRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    AOS.init();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header
        handleShow={handleShow}
        scrollPosition={scrollPosition}
        servicesRef={servicesRef}
        aboutRef={aboutRef}
        pricingRef={pricingRef}
        newsLetterRef={newsLetterRef}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              servicesRef={servicesRef}
              aboutRef={aboutRef}
              pricingRef={pricingRef}
            />
          }
        />
      </Routes>
      <Footer newsLetterRef={newsLetterRef} />
      <LoginModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </>
  );
}

export default App;
