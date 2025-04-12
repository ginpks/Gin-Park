import './blogPage.css';
import React from 'react';
import { Link } from 'react-router-dom';

function BlogPage() {
    return (
        <div className="blog-page">
            <div className="backArrow2">
              <span id="arrow"><a id="back"><Link to="/">&#8592;</Link></a></span>
            </div>
            <h1>soon...</h1>
        </div>
    )
}

export default BlogPage;