import React from "react";

import Banner from "../../components/Banner";
import Services from "../../components/Services";
import About from "../../components/About";
import Clients from "../../components/Clients";
import Pricing from "../../components/Pricing";

const Home = (props) => {
  const { servicesRef, aboutRef, pricingRef } = props;
  return (
    <>
      <Banner />
      <Services servicesRef={servicesRef} />
      <About aboutRef={aboutRef} />
      <Clients />
      <Pricing pricingRef={pricingRef} />
    </>
  );
};

export default Home;
