import React from 'react';
import './aboutPage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import from brands

function AboutPage() {
    return (
        <div className="about_me">
            <div className="aboutMeContainer">
                <div className="backArrow">
                    <Link to="/">
                        <span id="arrow"><a id="back" href="#">&#8592;</a></span>
                    </Link>
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
        </div>
    )
}
export default AboutPage;

