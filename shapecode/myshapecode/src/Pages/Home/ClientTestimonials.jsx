import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from "../../data/index.json";
import './client.css';


import  { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Typed from 'react-typed';


const typedStrings = ['Client Testimonials'];


export default function MySkills() {
  const [typedRef, typedInView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px',
  });

  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (typedInView) {
      setStartTyping(true);
    }
  }, [typedInView]);


  const [textRef, textInView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px',
  });
  const [animateText, setAnimateText] = useState(false);


  useEffect(() => {
    if (textInView) {
      setAnimateText(true);
    }
  }, [textInView]);











  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % data?.client?.length;
      setActiveIndex(nextIndex);
      sliderRef.current.slickGoTo(nextIndex);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const renderDots = dots => (
    <div className="dots-container">
      {dots.map((dot, index) => (
        <div
          key={index}
          className={`dot ${index === activeIndex ? 'active' : ''}`}
          onClick={() => sliderRef.current.slickGoTo(index)}
        ></div>
      ))}
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '34%',
    beforeChange: (current, next) => setActiveIndex(next),
    appendDots: dots => renderDots(dots),
  };

  const mobileSettings = {
    ...settings,
    slidesToShow: 1,
    centerMode: false,
  };

  
  return (
    <section className="client--section" id="mySkills">
      <div className="portfolio-client-container">


      {/* <Typed
            strings={['Client Testimonials']}
            typeSpeed={60}
            backSpeed={30}
            loop
          >
 <p className="client-upper-p"></p>
          </Typed> */}
       
       <div ref={typedRef}>
          <Typed
            strings={typedStrings}
            typeSpeed={60}
            backSpeed={30}
            loop={false}
            showCursor={false}
            start={startTyping}
            className='client-upper-p'
          />
        </div>


        <br />




        <h2 className="client-subhead">
        Check out the &nbsp;<span     ref={textRef} className={`client-text ${animateText ? 'visible' : ''}`}>Feedback</span>
          <br />
          from People I've worked with
        </h2>






        <p className="client--section--para">
          I work very hard to please my client here is just a few of the nice things
          <br />
          people say about me and my work
        </p>
      </div>
  
      <div className="carousel-wrapper">
      <Slider ref={sliderRef} {...(window.innerWidth <= 600 ? mobileSettings : settings)}>
        {data?.client?.map((item, index) => (
          <div key={index} className={`client--section--card ${activeIndex === index ? 'active' : ''}`}>
            <div className="client--section--card--content">
              <div className="client--section--img">
                <img src={item.src} alt="Product Chain" />
              </div>
              <h3 className="client-title">{item.title}</h3>
              <p className='client-position'>{item.position}</p>
              <p className='client-company'>{item.company}</p>
              <p className="client-description">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
  
}
