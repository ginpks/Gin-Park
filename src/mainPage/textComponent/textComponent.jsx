import React, { useContext } from 'react';
import { AnimationContext } from '../../animationContext';
import './textComponent.css';
import { Link } from "react-router-dom";

function TextComponent() {
    const { setExitDirection, setEnterDirection } = useContext(AnimationContext);

    return (
        <div className="text">
            <h2 id="syntax">function <span id="name">Gin_Park( ) </span>{'{'}</h2>

            <h2 id="info1">
                <Link to="/about" onClick={() => {
                    setExitDirection('up')
                    setEnterDirection('up')
                }}>
                    about_Me( );
                </Link>
            </h2>

            <h2 id="info2">
                <Link to="/projects" onClick={() => {
                    setExitDirection('left')
                    setEnterDirection('left')
                    }}>
                    my_Projects( );
                </Link>
            </h2>

            <h2 id="info3">
                {/* Blog page appears in middle,so MainPage disappears from middle */}
                <Link to="/blog" onClick={() => {
                    setExitDirection('middle')
                    setEnterDirection('middle')
                }}>
                    my_Blog( );
                </Link>
            </h2>

            <h2 id="syntax"><span id="blink">{'}'}</span></h2>
        </div>
    )
}

export default TextComponent;
