import React from 'react';
import './textComponent.css';
import { Link } from "react-router-dom";




function TextComponent() { 
    return (
        <div className="text">
            <h2 id="syntax">function <span id="name">Gin_Park( ) </span>{'{'}</h2>
            <Link to="/about">
                <h2 id="info1">about_Me( );</h2>
            </Link>
            <Link to="/projects">
                <h2 id="info2">projects( );</h2>
            </Link>
            <Link to="/blog">
                <h2 id="info3">my_blog( );</h2>
            </Link>
            <h2 id="syntax"><span id="blink">{'}'}</span></h2>
        </div>
    )
}

export default TextComponent;