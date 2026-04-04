import React from 'react'
import "./Menus.css";

import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import {FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector, } from "react-icons/fc"

const Menu = ({toggle}) => {
  return (
    <>
    {toggle ? (
      <>
      <motion.div
  className="navbar-profile-pic"
  initial={{ scale: 0.5, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <img src="./dk.jpeg" alt="profile pic" />
</motion.div>
       
     
      <motion.div
  className="nav-items"
  initial={{ x: -80, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <div className="nav-item">

    <div className="nav-link">
      <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
        <FcHome /> Home
      </Link>
    </div>

    <div className="nav-link">
      <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
        <FcAbout /> About
      </Link>
    </div>

    <div className="nav-link">
      <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
        <FcPortraitMode /> Education
      </Link>
    </div>

    <div className="nav-link">
      <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
        <FcBiotech /> Tech Stack
      </Link>
    </div>

    <div className="nav-link">
      <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
        <FcVideoProjector /> Projects
      </Link>
    </div>

    <div className="nav-link">
      <Link to="experience" spy={true} smooth={true} offset={-100} duration={100}>
        <FcReadingEbook /> Work Experience
      </Link>
    </div>

    <div className="nav-link">
      <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
        <FcBusinessContact /> Contact
      </Link>
    </div>

  </div>
</motion.div>
      
      </>
    ) : (
     <>
     <div className="nav-items">
        <div className="nav-item">
          <div className="nav-link">
            <Link 
            to='home' 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={100}>
            <FcHome />
            
            </Link>
            </div>

            <div className="nav-link">
            <Link
              to='about' 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={100}>
              <FcAbout />
            
              </Link>
            </div>

             <div className="nav-link">
            <Link
              to='education' 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={100}>
            <FcPortraitMode />
            
              </Link>
        </div>

        <div className="nav-link">
            <Link
              to='techstack' 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={100}>
             <FcBiotech />
           
            </Link>
            </div>

             <div className="nav-link">
            <Link
              to='projects' 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={100}>
            <FcVideoProjector />
           
            </Link>
            </div>

            <div className="nav-link">
            <Link
              to='experience' 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={100}>
              <FcReadingEbook/>
              
              </Link>
            </div>

             <div className="nav-link">
            <Link
              to='contact' 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={100}
            >
              <FcBusinessContact />
              
              </Link>
            </div>
            </div>
      </div>
     </>
    )}
     
    </>
  )
}

export default Menu
