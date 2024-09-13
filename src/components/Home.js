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
    handleScroll(); // Initial check in case sections are already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <div className="combined-background">
        <div className="hero">
          <h2>NEWVOX AI</h2>
          <h4>AI-POWERED LANGUAGE ASSISTANT</h4>
          <p>
            NewVox is dedicated to transforming the lives of individuals with
            aphasia by utilizing an AI-driven solution. Our mission is to
            empower those affected by aphasia to regain their independence and
            quality of life through innovative technologies.
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
                NewVox harnesses the power of Natural Language Processing (NLP)
                to assist those with Broca’s aphasia in communicating more
                effectively. By predicting the intended message and correcting
                errors in spoken language, our app ensures that patients can
                express themselves clearly, improving both their communication
                experience and quality of life.
              </p>
            </div>
            <div
              className="scroll-animation"
              ref={(el) => sectionsRef.current.push(el)}
            >
              <p>
                Unlike traditional AAC technologies, which often rely on
                pre-programmed messages and limited vocabulary options, NewVox
                offers a dynamic and adaptive solution that interprets and
                predicts a patient’s intended message in real time, allowing for
                more personalized, fluid communication. This innovative approach
                overcomes the rigid limitations of existing AAC devices, giving
                users greater freedom and accuracy in expressing themselves from
                the comfort of their mobile device.
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
                Existing Augmentative and Alternative Communication (AAC)
                technologies often fall short in meeting the needs of
                individuals with aphasia due to their high costs and limited
                adaptability. Many of these devices are prohibitively expensive,
                and their outdated functionality fails to accommodate the
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
