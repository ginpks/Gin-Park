import React  from 'react';
import { useEffect } from 'react';
import './mainPage.css';
import TextComponent from './textComponent/textComponent';
import LinksComponent from './linksComponent/linksComponent';
import { motion } from 'framer-motion';
import catchingHeart from '../assets/catching-heart.gif';
// Define animation variants for MainPage
const pageVariants = {
    initial:{
        x: "-100vw",
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: "-100vw",
        opacity: 0,
    }
};

// Define transition properties
const pageTransition = {
    type: "tween",
    ease: "anticipate", // Or your preferred ease
    duration: 0.3    // DECREASED duration (e.g., from 0.5)
}



function MainPage() {
    useEffect(() => {
        document.documentElement.classList.add('allow-scroll');
        return () => {
            document.documentElement.classList.remove('allow-scroll');
        };
    }, []); 
    return (
        <motion.div 
            className='main-page'
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="information">
                <img src={catchingHeart}></img>
                <TextComponent />
                <LinksComponent />
            </div>
        </motion.div>
    )
}

export default MainPage;