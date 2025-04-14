import React from 'react';
import './aboutPage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import from brands
import { motion } from 'framer-motion'; // <-- Import motion

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
                        Greetings! My name is Gin, and I'm a student at UMass Amherst currently pursuing a B.S. in Computer Science. <br /><br />
                        Developing and refining ideas through code is something that gets me out of bed in the morning. Whether it’s front-end, back-end, or full-stack work, I’m deeply dedicated to my craft while committed to learning and growing alongside others.<br /><br />
                        If you're curious about my leisurely activites: I enjoy hiking, gaming, shows/movies, MMA, Brazilian JiuJitsu, and especially food/cooking!<br></br> Check out my food on{' '}
                        <a href="https://www.instagram.com/ginsgluttony/" target="_blank" rel="noopener noreferrer" id="ig">
                            instagram!{' '}
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </h1>
                </div>
            </div>
        </motion.div>
    )
}
export default AboutPage;

// Developing and refining ideas through code is my true passion. Whether it’s front-end, back-end, or full-stack work, I’m deeply dedicated to my craft and committed to learning and growing alongside others in the field.
