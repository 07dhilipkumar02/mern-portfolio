import React from 'react'
import './Projects.css';
      import { motion  } from "framer-motion"; 
const Projects = () => {
    const spinAnimation = {
  initial: { rotate: -180, scale: 0.5, opacity: 0 },
  whileInView: { rotate: 0, scale: 1, opacity: 1 },
  transition: { duration: 0.8 },
  viewport: { once: true }
};
  return (
    
    <>
    <div className="project" id='projects'>
         <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
           TOP RECENT PROJECTS
            </h2>
        <hr />
        <p className='pb-3 text-center'>
          This project is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js), combined with Python, Machine Learning, Deep Learning, and OpenCV for real-time face recognition. The main objective of the project is to build a dynamic and responsive web platform where users can interact with the system efficiently while leveraging AI-powered face detection and recognition. The application includes features such as user authentication, face data management, and a responsive user interface. The backend handles API requests, image processing, deep learning model inference, and database operations with MongoDB, while the frontend provides a smooth and interactive user experience. This project demonstrates practical skills in computer vision, AI/ML algorithms, database management, and full-stack web development, making it a comprehensive AI-powered web solution.
        </p>

        <div className="row" id='ads'>
            
            <motion.div {...spinAnimation} className="col-md-4 py-3">
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge'>Full stack</span>
                        <img src="https://d3l69s690g8302.cloudfront.net/wp-content/uploads/2019/08/07100002/food-app-development.jpg" alt="project1" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className='card-details-badge'>Node</span>
                        <span className='card-details-badge'>Express</span>
                        <span className='card-details-badge'>React</span>
                        <span className='card-details-badge'>MongoDB</span>

                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h6 className="text-uppercase">FOOD ORDER WEBSITE</h6>
                        </div>
                        <a className='ad-btn' >View</a>
                    </div>
                </div>
            </motion.div>
            <motion.div {...spinAnimation} className="col-md-4 py-3">
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge'>MER + AI</span>
                        <img src="https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/01/artificial-intelligenceai-chat-bot-concept-1536x1024.jpg" alt="project1" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className='card-details-badge'>Node</span>
                        <span className='card-details-badge'>Express</span>
                        <span className='card-details-badge'>React</span>
                        <span className='card-details-badge'>MongoDB</span>

                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h6 className="text-uppercase">AI CHATBOT</h6>
                        </div>
                        <a className='ad-btn' >View</a>
                    </div>
                </div>
            </motion.div>
            <motion.div {...spinAnimation} className="col-md-4 py-3">
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge'>Python + ML DL</span>
                        <img src="https://www.necsws.com/wp-content/uploads/2025/03/iStock-1353652469.jpg" alt="project1" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className='card-details-badge'>Python</span>
                        <span className='card-details-badge'>ML</span>
                        <span className='card-details-badge'>DL</span>
                        <span className='card-details-badge'>OpenCv</span>


                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h6 className="text-uppercase">FACE RECOGNITION + DEEPFACE SYSTEM</h6>
                        </div>
                        <a className='ad-btn' >View</a>
                    </div>
                </div>
            </motion.div>
             <motion.div {...spinAnimation} className="col-md-4 py-3">
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge'>MERN + Python AI/NLP</span>
                        <img src="https://comparing.ai/wp-content/uploads/2023/02/Best-AI-Resume-Builders.png" alt="project1" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className='card-details-badge'>Python</span>
                        <span className='card-details-badge'>React</span>
                        <span className='card-details-badge'>Node</span>
                        <span className='card-details-badge'>Express</span>

                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h6 className="text-uppercase">AI RESUME ANALYZER</h6>
                        </div>
                        <a className='ad-btn' >View</a>
                    </div>
                </div>
            </motion.div>
            
            <motion.div {...spinAnimation} className="col-md-4 py-3">
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge'>MERN STACK</span>
                        <img src="./dhilipdk.png" alt="project1" />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className='card-details-badge'>React</span>
                        <span className='card-details-badge'>Node</span>
                        <span className='card-details-badge'>Express</span>
                        <span className='card-details-badge'>MongoDB</span>

                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h6 className="text-uppercase">MERN PORTFOLIO</h6>
                        </div>
                        <a className='ad-btn' >View</a>
                    </div>
                </div>
            </motion.div>
            
            
        </div>

    </div>
      
    </>
  )
}

export default Projects
