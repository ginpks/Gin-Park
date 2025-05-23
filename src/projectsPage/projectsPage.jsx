import React from 'react';
import "./projectsPage.css";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import kittyChase from '../assets/kitty-chase-pixel.gif';

// Define animation variants for AboutPage
const pageVariants = {
    initial: {
        x: "100vw",
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: "100vw",
        opacity: 0
    }
};


const pageTransition = {
    type: "tween",
    ease: "easeInOut", 
    duration: 0.55    
};

function ProjectPage() {
    return ( 
        <motion.div 
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="project-page"
        >
          <div className="projects">
            <div className="backArrow2">
              <span id="arrow"><a id="back"><Link to="/">&#8921;</Link></a></span>
            </div>
            <img id="kittychase" src={kittyChase}></img>
            <div className="projectText">
                <div className="NotifAI">
                    <p><a href="https://github.com/ginpks/NotifAI" target="_blank"><span id="info2">NotifAI</span></a> - Notifications as a Service (NaaS)</p>
                    <ul>
                        <li>Collaborated with a team of 7 to develop a full-stack notification service with modular, scalable architecture</li>
                        <li>Designed and implemented backend using the MVC pattern to ensure maintainability and separation of concerns</li>
                        <li>Built RESTful API routes and endpoints using Express.js for seamless client-server communication</li>
                        <li>Modeled complex data relationships with PostgreSQL and Sequelize ORM for efficient data handling</li>
                        <li>Developed session-based user authentication and persistence using Express.js middleware</li>
                        <li>Integrated Gemini API on the frontend to provide AI-powered chatbot assistance and dynamic UX</li>
                        <li>Implemented and configured Jest for unit testing, ensuring seamless integration between frontend and backend components</li>
                    </ul>
                </div>
                <div className="URide">
                    <p><a href="https://github.com/ginpks/URide" target="_blank"><span id="info2">URide</span></a> - a full-stack rideshare application</p>
                    <ul>
                        <li>Led a team of 7 as project manager in building a full-stack web application for facilitating ridesharing</li>
                        <li>Developed RESTful APIs that enhanced client-server communication and enabled efficient data management</li>
                        <li>Implemented direct messaging between users using Socket.io, storing chat messages in SQLite database</li>
                        <li>Designed user model for account creation and storage in SQLite database using Sequelize</li>
                        <li>Developed user-friendly, dynamically responsive front-end components for direct messaging page</li>
                        <li>Used Git version control for distribution of work and group code review</li>
                    </ul>
                </div>
                <hr className="rounded1"/>
                <div className="trivia">
                    <p><a href="https://github.com/ginpks/trivia-quiz" target="_blank"><span id="info3">Trivia Time</span></a> - a trivia quiz application</p>
                    <ul>
                        <li>Designed an interactive trivia game application using HTML/CSS and JavaScript</li>
                        <li>Implemented dynamically generating quiz questions, score tracking, and performance feedback</li>
                        <li>Retrieved and processed questions from an external API, ensuring unique questions each round</li>
                    </ul>
                </div>
                <hr className="rounded2"/>
                <div className="trivia">
                    <p><span id="info2">Weather Data Application</span></p>
                    <ul>
                        <li>Led a team of 3 in constructing an application that retrieves weather data using JavaScript</li>
                        <li>Retrieved and processed weather data at various university locations using multiple external APIs</li>
                        <li>Wrote mock tests for API fetching using Jest</li>
                        <li>Utilized Git version control to distribute work and implement changes</li>

                    </ul>
                </div>
                <hr className="rounded3"/>
                <div className="sudoku">
                    <p><a href="https://github.com/ginpks/project" target="_blank"><span id="info1">Sudoku Solver</span></a></p>
                    <ul>
                        <li>Designed an algorithm to solve sudoku puzzles using Python</li>
                    </ul>
                </div>
                </div>
            </div>
      </motion.div>
    )
}

export default ProjectPage;
