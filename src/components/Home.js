import React, { useEffect, useRef } from 'react';
import './Home.css';
import logo from '../Why_NewVox.webp'; 
import logo1 from '../Our_Approach.webp'; 


const Home = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight * 0.8 &&
          rect.bottom >= window.innerHeight * 0.2
        ) {
          section.classList.add('scroll-animation-visible');
        } else {
          section.classList.remove('scroll-animation-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <div className="combined-background">
        <div className="hero">
          <h2>NEWVOX AI</h2>
          <h4>HOLISTIC AI-POWERED APHASIA THERAPY PLATFORM</h4>
          <p>
            NewVox is dedicated to transforming the lives of individuals with
            aphasia by utilizing an AI-driven solution. Our mission is to develop 
            the first AI-powered aphasia therapy software that integrates both verbal and non-verbal 
            forms rehabilitation exercises to provide a holistic approach when improving communication. 
          </p>
        </div>
        <div className="sections-container">
          <div
            className="section our-approach-section scroll-animation"
            ref={(el) => sectionsRef.current.push(el)}
          >
            <h3>OUR APPROACH</h3>
            <div>
              <p className="our-approach-text">
                NewVox harnesses the power of artificial intelligence
                to assist those with Broca’s aphasia in communicating more
                effectively by building optimal training exercises that best fit 
                the needs of each individual user.
              </p>
            </div>
            <div
              className="scroll-animation"
              ref={(el) => sectionsRef.current.push(el)}
            >
              <p>
                Unlike traditional aphasia-rehabilitation software, which often rely on
                pre-programmed exercises and limited verbal-based therapy, NewVox
                offers a dynamic and adaptive solution that incorporates hand gestures in exercises
                to faciliate a multi-faceted recovery for individuals with aphasia.
              </p>
            </div>
          </div>
          <div
            className="section picture scroll-animation"
            ref={(el) => sectionsRef.current.push(el)}
          >
            <img src={logo1} alt="Our Approach" className="our-approach-image" />
          </div>
          <div
            className="section scroll-animation"
            ref={(el) => sectionsRef.current.push(el)}
          >
            <img src={logo} alt="NewVox AI" className="additional-section-image" />
          </div>
          <div className="section why-newvox-section">
            <h3>WHY NEWVOX</h3>
            <div
              className="scroll-animation why-newvox-text"
              ref={(el) => sectionsRef.current.push(el)}
            >
              <p>
                Founded by Adithya Sathyamurthy, a student at Northwestern
                University, NewVox was inspired by Adithya's experiences with an
                aphasia support group, where he witnessed firsthand the profound
                challenges faced by individuals with communication impairments.
                Motivated by a desire to make a meaningful impact, he launched
                NewVox to develop progressive tools that enhance communication
                and restore a sense of autonomy for those living with aphasia.
              </p>
            </div>
            <div
              className="scroll-animation why-newvox-text"
              ref={(el) => sectionsRef.current.push(el)}
            >
              <p>
                A lack of understanding of the prevalence and seriousness of aphasia has limited 
                technological innovation in the field. Many of the current software and devices are 
                prohibitively expensive and their outdated functionality fails to accommodate the
                evolving needs of aphasia patients. NewVox strives to create an
                affordable and effective solution to this problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
