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
        x: "50vw",
        scale: 0.7,
        opacity: 0
    },
    animate: {
        x: 0,
        scale: 1,
        opacity: 1
    },
    exit: {
        x: "50vw",
        scale: 0.7,
        opacity: 0
    }
};


// --- Stagger Container Animation ---
const containerVariants = {
    hidden: { opacity: 1 }, 
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2, // Optional delay before staggering starts
            staggerChildren: 0.2,  // Time between each card animation (adjust as needed)
        }
    }
};

// --- Individual Card Animation ---
const cardVariants = {
    hidden: { y: 0, opacity: 0 }, // Start slightly down and invisible
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            // Optional: add a transition to the card itself for smoothness
            type: "tween",
            ease: "anticipate", // Or your preferred ease
            duration: 0.5   // DECREASED duration (e.g., from 0.5)
        }
    }
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
            className="blog-page"
        >
            <div className="backArrow3">
              <span id="arrow"><a id="back"><Link to="/">&#8592;</Link></a></span>
            </div>
            <motion.div
                className="blog-posts"
                variants={containerVariants}
                initial="hidden" // Start children hidden
                animate="visible" // Animate children to visible
            >
                <motion.div className="blog-card" id="api" variants={cardVariants}>
                    <img src={restApiImage}></img>
                    <h1>Develop Your Own REST API</h1>
                </motion.div>
                <motion.div className="blog-card" id="CMV" variants={cardVariants}>
                    <img src={cmvImage}></img>
                    <h1>The Model-View-Controller Design</h1>
                </motion.div>
                <motion.div className="blog-card" id="food" variants={cardVariants}>
                    <img src={foodImage}></img>
                    <h1>Time for Food</h1>
                </motion.div>
                <motion.div className="blog-card" id="hikes" variants={cardVariants}>
                    <img src={hikesImage}></img>
                    <h1>Nature & Elevation</h1>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default BlogPage;