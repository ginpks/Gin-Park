import React from 'react';
import "./linksComponent.css";

function LinksComponent() {
    return (
        <div className="links">
            <h2 id="linkedin"><a href="https://www.linkedin.com/in/ginpks/" target="_blank" rel="noopener noreferrer" id="linkedin"><i className="fa">&#xf08c;</i></a></h2>
            <h2 id="github"><a href="https://github.com/ginpks" target="_blank" rel="noopener noreferrer" id="github"><i className="fa">&#xf09b;</i></a></h2>
            <h2 id="email"><a href="mailto: ginhpark@gmail.com" target="_blank" rel="noopener noreferrer" id="email"><i className="fa">&#xf0e0; </i></a></h2>
        </div>
    )
}

export default LinksComponent;