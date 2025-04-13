import './blogPage.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import restApiImage from '../assets/7076397.jpg';
import foodImage from '../assets/food.jpeg';
import hikesImage from '../assets/hike.jpeg';
import cmvImage from '../assets/cmv.png';
import { motion } from 'framer-motion';
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
    duration: 0.3    // DECREASED duration (e.g., from 0.5)
};

function BlogPage() {
    
    useEffect(() => {
        document.documentElement.classList.add('allow-scroll');
        return () => {
            document.documentElement.classList.remove('allow-scroll');
        };
    }, []); 


    return (
        <motion.div 
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="blog-page"
        >
            <div className="backArrow3">
              <span id="arrow"><a id="back"><Link to="/">&#8592;</Link></a></span>
            </div>
            <div className="blog-posts">
                <div className="blog-card" id="api">
                    <img src={restApiImage}></img>
                    <h1>Develop Your Own REST API</h1>
                </div>
                <div className="blog-card" id="CMV">
                    <img src={cmvImage}></img>
                    <h1>The Model-View-Controller Design</h1>
                </div>
                <div className="blog-card" id="food">
                    <img src={foodImage}></img>
                    <h1>Time for Food</h1>
                </div>
                <div className="blog-card" id="hikes">
                    <img src={hikesImage}></img>
                    <h1>Nature & Elevation</h1>
                </div>
            </div>
        </motion.div>
    )
}

export default BlogPage;