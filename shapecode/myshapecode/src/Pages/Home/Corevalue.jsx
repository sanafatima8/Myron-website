import data from "../../data/index.json";
import Lottie from 'react-lottie';
import creativityanimations from "../../animations/creativity.json";
import teamworkanimations from "../../animations/teamwork.json";
import innovationanimations from "../../animations/innovation.json";
import qualityanimations from "../../animations/quality.json";
import intergrityanimations from "../../animations/intergrity.json";
import experienceanimations from "../../animations/experience.json";


import  { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Typed from 'react-typed';

import './core.css';



const typedStrings = ['The Core Values that drive'];

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



  const getAnimationOptions = (animationIdentifier) => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    switch (animationIdentifier) {
      case 'creativity':
        return {
          ...defaultOptions,
          animationData: creativityanimations,
        };
      case 'teamwork':
        return {
          ...defaultOptions,
          animationData: teamworkanimations,
        };
        case 'innovation':
        return {
          ...defaultOptions,
          animationData: innovationanimations,
        };
        case 'quality':
          return {
            ...defaultOptions,
            animationData: qualityanimations,
          };
          case 'intergrity':
            return {
              ...defaultOptions,
              animationData: intergrityanimations,
            };
            case 'experience':
              return {
                ...defaultOptions,
                animationData: experienceanimations,
              };
      // Add more cases for other animations if needed
      default:
        return defaultOptions;
    }
  };


  return (
    <section className="core--section" id="affiliate">
    <div className="portfolio-core-container">

    {/* <Typed
            strings={['The Core Values that drive']}
            typeSpeed={60}
            backSpeed={30}
            loop
          >
       <h2 className="core-maintitle"></h2>
          </Typed> */}



        
<div ref={typedRef}>
          {startTyping && (
          <Typed
            strings={typedStrings}
            typeSpeed={60}
            backSpeed={30}
            loop={false}
            showCursor={false}
            
            className='core-maintitle'
          />
          )}
        </div>


         <h2  className="core-maintitle">
         &nbsp;<span ref={textRef} className={`core-text ${animateText ? 'visible' : ''}`}>Everything</span>&nbsp;
         I do</h2>

</div>

      

      <div className="core--section--container">
        {data?.core?.map((item, index) => {
                    const animationOptions = getAnimationOptions(item.animation);

        return(
          <div key={index} className="core--section--card">
            <div className="core--section--img">
            <Lottie options={animationOptions} height={100} width={120} />


            </div>
            <div className="core--section--card--content">
              <h3 className="core-title">{item.title}</h3>
              <p className="core-description">{item.description}</p>
            
            </div>
          </div>
           );
          })}
      </div>
    </section> 
  );
}
