import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="About-us">
      <h1> About Us </h1>
      <img src="https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/tutorials/uploads/pictures/1628677506-101156.png" alt="Company Logo" />
      <p>Our mission is to empower young students to be the inventors and creators.</p>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/tutorials/uploads/pictures/1628677506-101156.png" alt="Person 1" />
            <div className="container">
              <h2>XXX</h2>
              <p className="title">CEO & Founder</p>
              <p>Information about the person</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/tutorials/uploads/pictures/1628677506-101156.png" alt="Person 2" />
            <div className="container">
              <h2>XXX</h2>
              <p className="title">CEO & Founder</p>
              <p>Information about the person</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src="https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/tutorials/uploads/pictures/1628677506-101156.png" alt="Person 3" />
            <div className="container">
              <h2>XXX</h2>
              <p className="title">CEO & Founder</p>
              <p>Information about the person</p>
            </div>
          </div>
        </div>
      </div>
      <h3>Follow us on</h3>
      <a href="#" className="fa fa-facebook"></a> 
      <a href="#" className="fa fa-twitter"></a> 
      <a href="#" className="fa fa-linkedin"></a> 
    </div>
  );
};

export default AboutUs;
