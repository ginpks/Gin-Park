import React from 'react';
import './aboutPage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import from brands
import { motion } from 'framer-motion'; // <-- Import motion

// Define animation variants for AboutPage
const pageVariants = {
    initial: {
        x: "100vw", // Start off-screen to the right
        opacity: 0
    },
    animate: {
        x: 0, // Animate to center
        opacity: 1
    },
    exit: {
        x: "100vw", // Exit off-screen to the right
        opacity: 0
    }
};

// Define transition properties (can be the same or different)
const pageTransition = {
    type: "tween",
    ease: "anticipate", // Or your preferred ease
    duration: 0.3   // DECREASED duration (e.g., from 0.5)
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
                    <span id="arrow"><a id="back" href="#"><Link to="/">&#8592;</Link></a></span>
                </div>
                <div className="aboutMeText">
                    <h1>
                        Greetings! My name is Gin, and I'm a student at UMass Amherst currently pursuing a B.S. in Computer Science. <br /><br />
                        I love coding and bringing ideas to life through the application of my skills. In particular, I have a strong affinity for front-end, back-end, or fullstack development. I'm dedicated to my craft, and I'm always looking for ways to grow and learn from others.<br /><br />
                        Whenever I'm free, I enjoy hiking, gaming, shows/movies, MMA, Brazilian JiuJitsu, and especially food/cooking! Check out my food on{' '}
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

