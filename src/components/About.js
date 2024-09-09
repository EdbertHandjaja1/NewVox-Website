import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Welcome to NewVox, a passionate team dedicated to creating innovative solutions for those with Aphasia. 
      <br></br>
        Our mission is to leverage cutting-edge technology to improve communication for individuals who face language challenges.
      </p>
      <div className="team">
        <h3>Meet the Team</h3>
        <div className="team-member">
          <h4>Adithya Sathyamurthy</h4>
          <p>Founder & CEO</p>
          <p>Adithya is a neuroscience major at Northwestern University with a deep commitment to helping those with Aphasia. His experience in Aphasia support groups drives his vision for NewVox.</p>
        </div>
        <div className="team-member">
          <h4>VK</h4>
          <p>Position</p>
          <p>Description</p>
        </div>
        <div className="team-member">
          <h4>Nick</h4>
          <p>Position</p>
          <p>Description</p>
        </div>
        <div className="team-member">
          <h4>Edbert Handjaja</h4>
          <p>Position</p>
          <p>Description</p>
        </div>
        <div className="team-member">
          <h4>SM</h4>
          <p>Position</p>
          <p>Description</p>
        </div>
        <div className="team-member">
          <h4>Sameet</h4>
          <p>Position</p>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default About;
