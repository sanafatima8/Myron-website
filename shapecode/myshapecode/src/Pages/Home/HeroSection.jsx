import React from 'react';
import  { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Typed from 'react-typed';



const typedStrings = [' Unveiling the Synthesis of <br /> Design and Technology'];


export default function HeroSection() {
  
  const [startTyping, setStartTyping] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px',
  });

  useEffect(() => {
    if (inView) {
      setStartTyping(true);
    } else {
      setStartTyping(false);
    }
  }, [inView]);


  
  
  
  
  
  
  return (
    <section id="heroSection" className="hero--section">
<div className='mobile-img'>
   <div className="hero--section--img-mobile">
        <img src="./img/myron code transparent bg 1.svg" alt="Hero Section Mobile" />
      </div> 

      <div className="hero--section--img-mobile2">
        <img src="./img/myron design transparent bg 1.svg" alt="Hero Section Mobile" />
      </div> 

      </div>

      
      <div className="hero--section--img">
        <img src="./img/myron beige bg 1.jpg" alt="Hero Section" className="fadeInImage" />
      </div>

        <div className="hero--section--content">
          {/* <Typed
            strings={['Unveiling the Synthesis of <br /> Design and Technology']}
            typeSpeed={60}
            backSpeed={30}
            loop
          >
            <h1 className="hero--section--title"></h1>
          </Typed> */}




          <div ref={ref}>
          <Typed
            strings={typedStrings}
            typeSpeed={60}
            backSpeed={30}
            loop={false}
            showCursor={false}
            start={startTyping}
            className='hero--section--title'
          />
        </div>


        </div>
        <div className="first-container">
          <a href="#study" className="your-class">EXPLORE MY WORKS</a>
        </div>
      

    </section>
  );
}



