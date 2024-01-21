
import glassiconanimations from "../../animations/glassicon.json";
import Lottie from 'react-lottie';
import './serve.css';

import  { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Typed from 'react-typed';


const typedStrings = [' The perfect addition  <br /> to any team.'];

export default function Work() {







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










  const glassiconanimationOptions = {
    loop: true,
    autoplay: true,
    animationData: glassiconanimations,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };



    return (
      <section id="serveSection" className="serve--section">

       <div className="serve--section--img">
          <img src="./img/last image.svg" alt="serve Section"  className="last-image"/>
        </div>
       


        <div className="serve--section--content--box">
          <div className="serve--section--content">
            <p className="serve--title">Born to serve</p>

{/* 
            <Typed
            strings={[' The perfect addition to <br /> any team.']}
            typeSpeed={60}
            backSpeed={30}
            loop
          >
  <h1 className="serve--section--title"></h1>
          </Typed>
           */}
        



          <div ref={ref}>
          <Typed
            strings={typedStrings}
            typeSpeed={60}
            backSpeed={30}
            loop={false}
            showCursor={false}
            start={startTyping}
            className='serve--section--title'
          />
        </div>

            <p className="serve--ambition-description">
            I want to thank you for spending time on my portfolio site, I truly
           hope it is clear to you now that I am the right fit fotr your company.
            Cheers to the success of your business!
            </p>
            <a href="your-link-url" className="your-button-class">EXPLORE MY WORKS</a>
            
            <Lottie options={glassiconanimationOptions} height={200} width={220} />


  
{/* <lord-icon
    src="https://cdn.lordicon.com/imupetit.json"
    trigger="hover"
    colors="primary:#c79816,secondary:#ffffff"
    style={{ width: '250px', height: '250px' }}
/> */}
          </div>
        </div>

      

   
      </section>
    );
  }




