import React from 'react';
import './mainPageBG.css';
import './mainPage.css';
import TextComponent from './textComponent/textComponent';
import LinksComponent from './linksComponent/linksComponent';



function MainPage() {
    return (
        <div className="main-page">
            <div className="bg-animation">
                <div id="stars"></div>
                <div id="stars2"></div>
            </div>
            <div className="information">
                <TextComponent />
                <LinksComponent />
            </div>
        </div>
    )
}

export default MainPage;