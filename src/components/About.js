import React from 'react';
import './About.css';
import Adithya from '../Adithya_Sathyamurthy.jpeg'; // Ensure the path is correct
import Ved from '../Ved_Kommalapati.jpeg'; // Ensure the path is correct
import Nicholas from '../Nicholas_Bruha.jpeg'; // Ensure the path is correct
import Sameer from '../Sameer_Komoravolu.jpeg'; // Ensure the path is correct
import Edbert from '../Edbert_Handjaja.jpg'; // Ensure the path is correct

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Welcome to NewVox, a passionate team dedicated to creating innovative solutions for those with Aphasia.
        <br />
        Our mission is to leverage cutting-edge technology to improve communication for individuals who face language challenges.
      </p>
      <div className="team">
        <h3>Meet the Team</h3>
        <div className="team-member">
          <div className="team-member-content">
            <div className="team-member-text">
              <h4>Adithya Sathyamurthy</h4>
              <p>Co-Founder and Chief Executive Officer</p>
              <p>
                Adithya is a sophomore studying neuroscience and linguistics at Northwestern University. As a neuroscience major with a particular interest in aphasia, Adithya focused on determining effective solutions to tear the communication barrier isolating those with Broca’s aphasia. His work studying primary progressive aphasia at the Mesulam Center for Cognitive Neurology and Alzheimer's Disease has given him a thorough understanding of the neurological basis behind language disorders such as aphasia. With a background in leadership and startups, Adithya is responsible for overseeing all development and drives the strategic vision to ensure that NewVox’s mission and goals are achieved.
              </p>
            </div>
            <img src={Adithya} alt="Adithya Sathyamurthy" className="team-member-image" />
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-content">
            <div className="team-member-text">
              <h4>Ved Kommalapati</h4>
              <p>Co-Founder and Chief Technology Officer</p>
              <p>
                Ved is a junior studying mathematics and computer science at the University of Illinois - Urbana Champaign. His work as a software engineer at Capital One and State Farm and research at the National Center for Supercomputing Applications has provided him with a deep understanding of how to develop robust system architectures. At NewVox, Ved is responsible for overseeing all aspects of technical development and research.
              </p>
            </div>
            <img src={Ved} alt="Ved Kommalapati" className="team-member-image" />
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-content">
            <div className="team-member-text">
              <h4>Nicholas Bruha</h4>
              <p>Co-Founder and Chief Financial Officer</p>
              <p>
                Nicholas is a sophomore studying economics and biology at Northwestern University. As an aspiring physician, Nicholas has strived to understand and analyze the healthcare system from a holistic perspective through his econometrics research at Northwestern University. Nicholas’s prior experiences managing financial operations at other startup companies has made him a valuable asset in the development of NewVox.
              </p>
            </div>
            <img src={Nicholas} alt="Nicholas Bruha" className="team-member-image" />
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-content">
            <div className="team-member-text">
              <h4>Edbert Handjaja</h4>
              <p>Web Developer Intern</p>
              <p>
                Edbert is a sophomore studying computer science and data science at Northwestern University. As a Web Developer Intern at NewVox, Edbert plays a key role in designing and developing intuitive user interfaces for both an application and website aimed at supporting patients with Broca’s aphasia.
              </p>
            </div>
            <img src={Edbert} alt="Edbert Handjaja" className="team-member-image" />
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-content">
            <div className="team-member-text">
              <h4>Sameer Komoravolu</h4>
              <p>Software Engineer</p>
              <p>
                Sameer is a junior studying computer science at the University of Illinois - Urbana Champaign. With a specific interest in machine learning, Sameer has years of work experience as a software engineering intern for research groups at both the University of Illinois and Fermilab. Sameer is passionate about applying his expertise to support those with Broca’s Aphasia and is responsible for developing the architecture for NewVox.
              </p>
            </div>
            <img src={Sameer} alt="Sameer Komoravolu" className="team-member-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
