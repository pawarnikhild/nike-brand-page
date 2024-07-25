import React from "react";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero-button">
            <button>Shop Now</button>
            <button className="secondary-button">Category</button>
        </div>
        <div className="availability">
        <p>Also Available On</p>

        </div>
        <div className="brand-icons">
            <img src='/images/amazon.png' alt="Amazon"/>
            <img src='/images/flipkart.png' alt="Flipkart"/>
        </div>
      </div>
      <div className="hewo-image">
      <img src='/images/shoe_image.png' alt="Product-image"/>
      </div>
    </main>
  );
};

export default Hero;
