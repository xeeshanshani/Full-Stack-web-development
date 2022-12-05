import React from "react";

import HeadingLineDec from "../../assets/images/heading-line-dec.png";
import PricingTable from "../../assets/images/pricing-table-01.png";

const Pricing = (props) => {
  const { pricingRef } = props;
  return (
    <div id="pricing" ref={pricingRef} className="pricing-tables">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="section-heading" data-aos="fade-up">
              <h4>
                We Have The Best Pre-Order <em>Prices</em> You Can Get
              </h4>
              <img src={HeadingLineDec} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eismod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-item-regular" data-aos="flip-right">
              <span className="price">$12</span>
              <h4>Standard Plan App</h4>
              <div className="icon">
                <img src={PricingTable} alt="" />
              </div>
              <ul>
                <li>Lorem Ipsum Dolores</li>
                <li>20 TB of Storage</li>
                <li className="non-function">Life-time Support</li>
                <li className="non-function">Premium Add-Ons</li>
                <li className="non-function">Fastest Network</li>
                <li className="non-function">More Options</li>
              </ul>
              <div className="border-button">
                <a href="#">Purchase This Plan Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-item-pro" data-aos="flip-up">
              <span className="price">$25</span>
              <h4>Business Plan App</h4>
              <div className="icon">
                <img src={PricingTable} alt="" />
              </div>
              <ul>
                <li>Lorem Ipsum Dolores</li>
                <li>50 TB of Storage</li>
                <li>Life-time Support</li>
                <li>Premium Add-Ons</li>
                <li className="non-function">Fastest Network</li>
                <li className="non-function">More Options</li>
              </ul>
              <div className="border-button">
                <a href="#">Purchase This Plan Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-item-regular" data-aos="flip-left">
              <span className="price">$66</span>
              <h4>Premium Plan App</h4>
              <div className="icon">
                <img src={PricingTable} alt="" />
              </div>
              <ul>
                <li>Lorem Ipsum Dolores</li>
                <li>120 TB of Storage</li>
                <li>Life-time Support</li>
                <li>Premium Add-Ons</li>
                <li>Fastest Network</li>
                <li>More Options</li>
              </ul>
              <div className="border-button">
                <a href="#">Purchase This Plan Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
