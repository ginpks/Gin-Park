import './blogPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import restApiImage from '../assets/7076397.jpg';
import foodImage from '../assets/food.jpeg';
import hikesImage from '../assets/hike.jpeg';
import cmvImage from '../assets/cmv.png';

function BlogPage() {
    return (
        <div className="blog-page">
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
        </div>
    )
}

export default BlogPage;