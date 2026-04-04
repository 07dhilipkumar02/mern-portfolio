import React from 'react'
import './About.css';
import { Jump } from 'react-swift-reveal';

const About = () => {
  return (
    <>
   <Jump>
    <div className="about" id='about'>
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="/dk.jpeg" alt="profile" />
              
              </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                I am an aspiring Full Stack Developer with hands-on experience in the MERN Stack, including MongoDB, Express.js, React.js, and Node.js. I have completed training in Artificial Intelligence and Machine Learning and enjoy building modern, responsive, and user-friendly web applications. I am passionate about learning new technologies, solving real-world problems, and developing scalable web solutions. Currently, I am looking for opportunities to enhance my skills and grow as a professional software developer.
              </p>
            </div>

        </div>
    </div>
     </Jump>
    </>
  )
}

export default About
