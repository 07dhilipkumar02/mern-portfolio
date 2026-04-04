import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import { Tada } from 'react-swift-reveal';
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import "./App.css";




function App() {
  const [theme] = useTheme();
  return (
    
      <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
      <Layout />
      <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
      </div>
     <div className="footer">
  
  {/* Social Icons */}
  <div className="footer-icons">
    <FaFacebookF size={40} color="black" />
        <FaLinkedinIn  size={40} color="black" />
        <FaTwitter size={40} color="black" />
        <FaYoutube size={40} color="black" />
  </div>

  {/* Navigation Links */}
  <div className="footer-links">
    <a href="#home">Home</a>
    <a href="#news">About</a>
    <a href="#about">Education</a>
    <a href="#contact">Tech Stack</a>
    <a href="#team">Projects</a>
    <a href="#team">Work Experience</a>
    <a href="#team">Contact</a>

  </div>

  {/* Bottom Bar */}
  <div className="footer-bottom">
    <p>Copyright ©2026; Designed by DHILIPA</p>
  </div>

</div>
      
      </div>
      
     <ScrollToTop 
     smooth  
     color="#f29f67"
     style={{backgroundColor:'#1e1e2c',borderRadius:'80px'}}/>
      </>
   
   
  );
}

export default App;
