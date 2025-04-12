import './blogPage.css';
import React from 'react';
import { Link } from 'react-router-dom';

function BlogPage() {
    return (
        <div className="blog-page">
            <div className="backArrow2">
              <Link to="/">
                <span id="arrow"><a id="back">&#8592;</a></span>
              </Link>
            </div>
            <h1>soon...</h1>
        </div>
    )
}

export default BlogPage;