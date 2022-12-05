import React from "react";

import HeadingLineDec from "../../assets/images/heading-line-dec.png";
import AboutRightDec from "../../assets/images/about-right-dec.png";

const About = (props) => {
  const { aboutRef } = props;
  return (
    <div id="about" ref={aboutRef} className="about-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="section-heading" data-aos="fade-right">
              <h4>
                About <em>What We Do</em> &amp; Who We Are
              </h4>
              <img src={HeadingLineDec} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eismod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="box-item" data-aos="fade-right">
                  <h4>
                    <a href="#">Maintance Problems</a>
                  </h4>
                  <p>Lorem Ipsum Text</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box-item" data-aos="fade-right">
                  <h4>
                    <a href="#">24/7 Support &amp; Help</a>
                  </h4>
                  <p>Lorem Ipsum Text</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box-item" data-aos="fade-right">
                  <h4>
                    <a href="#">Fixing Issues About</a>
                  </h4>
                  <p>Lorem Ipsum Text</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box-item" data-aos="fade-right">
                  <h4>
                    <a href="#">Co. Development</a>
                  </h4>
                  <p>Lorem Ipsum Text</p>
                </div>
              </div>
              <div className="col-lg-12">
                <p data-aos="fade-right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eismod tempor idunte ut labore et dolore adipiscing magna.
                </p>
                <div className="gradient-button" data-aos="fade-right">
                  <a href="#">Start 14-Day Free Trial</a>
                </div>
                <span data-aos="fade-right">*No Credit Card Required</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-image" data-aos="fade-left">
              <img src={AboutRightDec} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
