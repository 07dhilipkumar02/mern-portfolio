import React, {useState} from 'react'
import {BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs';
import './Contact.css';
import { Rotate } from 'react-swift-reveal';
import { LightSpeed } from 'react-swift-reveal';
import {  toast } from 'react-toastify';
import axios from "axios";
const Contact = () => {
  const[name, setname] = useState("");
  const[email, setEmail] = useState("");
  const[msg, setMsg] = useState("");

  //handle submit button
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if (!name || !email || !msg) {
            toast.error("PLease Provide all fields");
          }
          const res = await axios.post("https://mern-portfolio-11.onrender.com/api/portfolio1/sendEmail", {
            name,
            email,
            msg,
          });
          //validation success
          if (res.data.success) {
            toast.success(res.data.message);
            setname("");
            setEmail("");
            setMsg("");
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error);
        }
      };
    

  return (
    <>
      <div className="contact" id='contact'>
        <div className="card card0 border-0">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-xL-6 col-sm-12">
                  <div className="card1">
                    <div className="row border-line">
                      <LightSpeed>
                        <img src="https://media.istockphoto.com/id/1988746299/photo/contact-us-or-customer-support-hotline-people-connect-businessman-touching-on-virtual-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=EiT9evwE-uWNQuA_zm5xLcPU05kzTi76kXpDcnTIeMM=" alt="ocontact" className='image' 
                        />
                        </LightSpeed>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
               <div className="card2 d-flex card border-0 px-4 py-5">
              <div className="row">
             
                <div className="row">
               <h6>Contact with 
                <BsLinkedin  color='blue' size={36} className='ms-2'/>
                <BsGithub color='black' size={36} className='ms-2'/>
                <BsFacebook  color='blue' size={36} className='ms-2'/>


               </h6>
                </div>
                
              
              <div className="row px-3 mb-4">
                <div className="line" />
                <small className='or text-center'>OR</small>
                <div className='line' />
              </div>
              <div className="row px-3">
               <input 
               type="text" 
               name="name" 
               placeholder="Enter your Name" 
               className='mb-3'
               value={name}
               onChange={(e) => setname(e.target.value)}
               />
              </div>
              <div className="row px-3">
               <input 
               type="email" 
               name="email" 
               placeholder="Enter Your Email Address" className='mb-3'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />
              </div>
              <div className="row px-3">
               <textarea type="text" 
               name="msg" 
               placeholder="Write your message" 
               className='mb-3'
               value={msg}
               onChange={(e) => setMsg(e.target.value)}
               />
              </div>
              <div className="row px-3">
               <button className='button' onClick={handleSubmit}>
                SEND MESSAGE
               </button>
              </div>
              </div>
            </div>
            </Rotate>
        </div>
      </div>
      </div>
      </div>
      
    </>
  )
}

export default Contact
