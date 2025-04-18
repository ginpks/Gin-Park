// src/blogPage/BlogPostsList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import restApiImage from '../assets/7076397.jpg';
import foodImage from '../assets/food.jpeg';
import hikesImage from '../assets/hike.jpeg';
import cmvImage from '../assets/cmv.png';
import './blogPage.css'; // You might want a separate CSS or adjust paths

const containerVariants = {
    hidden: { opacity: 0 }, 
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.2,
        }
    }
};

const cardVariants = {
    hidden: { y: 0, opacity: 0 }, 
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeIn",
            duration: 0.3
        }
    }
};

function BlogPostsList() {
    return (
        <motion.div
            className="blog-posts"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <motion.div className="blog-card" id="api" variants={cardVariants} whileHover={{ y: -5, duration: 0.01  }}>
                <Link to="rest-api"> 
                    <img src={restApiImage} alt="REST API illustration" />
                    <h1>A Guide to REST APIs</h1>
                </Link>
            </motion.div>
            <motion.div className="blog-card" id="CMV" variants={cardVariants} whileHover={{ y: -5, duration: 0.01  }}>

                    <img src={cmvImage} alt="Model View Controller diagram" />
                    <h1>The Model-View-Controller Design</h1>

            </motion.div>
            <motion.div className="blog-card" id="food" variants={cardVariants} whileHover={{ y: -5, duration: 0.01  }}>

                    <img src={foodImage} alt="Delicious food" />
                    <h1>Time for Food</h1>

            </motion.div>
            <motion.div className="blog-card" id="hikes" variants={cardVariants} whileHover={{ y: -5, duration: 0.01  }}>
                    <img src={hikesImage} alt="Mountain landscape" />
                    <h1>Nature & Elevation</h1>
            </motion.div>
        </motion.div>
    );
}

export default BlogPostsList;
