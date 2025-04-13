import React from 'react';
import './textComponent.css';
import { Link } from "react-router-dom";


function TextComponent() { 
    return (
        <div className="text">
            <h2 id="syntax">function <span id="name">Gin_Park( ) </span>{'{'}</h2>

            <h2 id="info1">
                <Link to="/about">about_Me( );</Link>
            </h2>

            <h2 id="info2">
                <Link to="/projects">my_Projects( );</Link>
            </h2>
         
            <h2 id="info3">
                <Link to="/blog">my_Blog( );</Link>
            </h2>
            
            <h2 id="syntax"><span id="blink">{'}'}</span></h2>

        </div>
    )
}

export default TextComponent;