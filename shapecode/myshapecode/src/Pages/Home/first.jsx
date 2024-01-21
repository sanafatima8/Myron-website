import React from 'react';
import Typed from 'react-typed';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function HeroSection() {
  return (
    <ParallaxProvider>
      <section id="heroSection" className="hero--section">

        <Parallax y={[-20, 20]} tagOuter="figure">
          <div className="hero--section--img-mobile">
            <img src="./img/myron-beige-bg-1.jpg" alt="Hero Section Mobile" />
          </div>
        </Parallax>

        <Parallax y={[-30, 30]} tagOuter="figure">
          <div className="hero--section--img">
            <img src="./img/myron-beige-bg-1.jpg" alt="Hero Section" />
          </div>
        </Parallax>

        <Parallax y={[-40, 40]} tagOuter="figure">
          <div className="hero--section--img">
            <img src="./img/myron-beige-bg-1.jpg" alt="Hero Section" />
          </div>
        </Parallax>

        <Parallax y={[-50, 50]} tagOuter="figure">
          <div className="hero--section--img">
            <img src="./img/myron-beige-bg-1.jpg" alt="Hero Section" />
          </div>
        </Parallax>

        <div className="hero--section--content-n-box">
          <div className="hero--section--content">
            <Typed
              strings={['Unveiling the Synthesis of <br /> Design and Technology']}
              typeSpeed={60}
              backSpeed={30}
              loop
            >
              <h1 className="hero--section--title"></h1>
            </Typed>
          </div>
          <div className="center-container">
            <a href="#study" className="your-class">EXPLORE MY WORKS</a>
          </div>
        </div>

      </section>
    </ParallaxProvider>
  );
}
