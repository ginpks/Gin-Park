import React from 'react';
import './mainPage.css';
import TextComponent from './textComponent/textComponent';
import LinksComponent from './linksComponent/linksComponent';



function MainPage() {
    return (
        <div className="main-page">
            <div className="information">
                <TextComponent />
                <LinksComponent />
            </div>
        </div>
    )
}

export default MainPage;