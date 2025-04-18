import './blogPage.css';
import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'; // Removed useOutlet
import { motion } from 'framer-motion';
import whiteCat from '../assets/white-cat.gif';

// Define animation variants for BlogPage (Layout)
const pageVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
};

const pageTransition = {
    type: "tween",
    ease: "easeInOut", 
    duration: 0.5
};

function BlogPage() {
    useEffect(() => {
        document.documentElement.classList.add('allow-scroll');
        return () => {
            document.documentElement.classList.remove('allow-scroll');
        };
    }, []);

    return (
        <div>
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="blog-page" 
        >
            <div className="backArrow3">
                <span id="arrow"><a id="back"><Link to="/">G I N P A R K</Link></a></span>
            </div>
            <Link to="/"><img className="white-cat" src={whiteCat} alt="White cat gif link to home"></img></Link>
            <hr id="roundedblog" className="back" />
            <Outlet />
        </motion.div>
        </div>
    );
}

export default BlogPage;
