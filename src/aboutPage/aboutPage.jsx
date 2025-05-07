import React from 'react';
import './aboutPage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { motion } from 'framer-motion'; // <-- Import motion
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'; 
import { faBurger } from '@fortawesome/free-solid-svg-icons'; 
import { faCheese } from '@fortawesome/free-solid-svg-icons';

const pageVariants = {
    initial: {
        x: "0vw",
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: "0vw",
        opacity: 0
    }
};


const pageTransition = {
    type: "tween",
    ease: "easeInOut", 
    duration: 0.55   
};

function AboutPage() {
    return (
        <motion.div 
            className="about_me"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="aboutMeContainer">
                <div className="backArrow">
                    <span id="arrow"><a id="back" href="#"><Link to="/">&#215;</Link></a></span>
                </div>
                <div className="aboutMeText">
                    <h1>
                        Hi. My name's Gin. <br></br>I'm a student at UMass Amherst currently pursuing a B.S. in Computer Science. <br /><br />
                       Programming is a creative outlet for me, and I love learning new tools that help me express myself. Whether it’s front-end, back-end, or full-stack work, I'm always chasing new opportunities, and I love connecting with others who share the same sentiment. \(ˆ˚ˆ)/  <br /><br />
                       Beyond coding, I enjoy hiking, gaming, watching shows and movies, and practicing MMA/BJJ. I’m also big on food—both cooking and eating.
                        <br></br> Check out my food on{' '}
                        <a href="https://www.instagram.com/ginsgluttony/" target="_blank" rel="noopener noreferrer" id="ig">
                            instagram!{' '}
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        {' '} <FontAwesomeIcon icon={faPizzaSlice} />
                        {' '} <FontAwesomeIcon icon={faBurger} />
                        {' '} <FontAwesomeIcon icon={faCheese} />
                    </h1>
                </div>
            </div>
        </motion.div>
    )
}
export default AboutPage;

// Developing and refining ideas through code is my true passion. Whether it’s front-end, back-end, or full-stack work, I’m deeply dedicated to my craft and committed to learning and growing alongside others in the field.
