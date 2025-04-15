import React  from 'react';
import { useContext } from 'react';
import './mainPage.css';
import TextComponent from './textComponent/textComponent';
import LinksComponent from './linksComponent/linksComponent';
import { motion } from 'framer-motion';
import catchingHeart from '../assets/catching-heart.gif';
import { AnimationContext } from '../animationContext';



const pageTransition = {
    type: "tween",
    ease: "easeInOut", 
    duration: 0.5    
}



function MainPage() {
    const { exitDirection, enterDirection} = useContext(AnimationContext);

    const pageVariants = {
        initial: () => {
            switch (enterDirection) {
                case 'left': // Enter from the left (e.g., coming from About)
                    return { x: "-100vw", opacity: 0 };
                case 'up': // Enter from the top
                    return { y: "-100vh", opacity: 0 };
                case 'middle': // Fade in
                    return {
                        scale: 0.9,  
                        opacity: 0
                    }
            }          
        },
        animate: {
            y: 0,
            x: 0,
            scale: 1,
            opacity: 1
        },
        exit: () => {
            switch (exitDirection) {
                 case 'left': // Exit towards left (when going to Projects)
                     return { x: "-100vw", opacity: 0 };
                 case 'up': // Exit upwards (when going to Blog)
                     return { y: "-100vh", opacity: 0 };
                 case 'middle': // Fade out in place
                    return {
                        scale: 0.9, 
                        opacity: 0
                    };
            }
        }
    };
    
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