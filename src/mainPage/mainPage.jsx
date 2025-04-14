import React  from 'react';
import { useEffect } from 'react';
import './mainPage.css';
import TextComponent from './textComponent/textComponent';
import LinksComponent from './linksComponent/linksComponent';
import { motion } from 'framer-motion';
import catchingHeart from '../assets/catching-heart.gif';

const pageVariants = {
    initial: {
        y: "-100vh", // Start above the viewport
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    },
    exit: {
        y: "-100vh", // Exit below the viewport
        opacity: 0
    }
};

const pageTransition = {
    type: "tween",
    ease: "easeInOut", 
    duration: 0.45    
}



function MainPage() {
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