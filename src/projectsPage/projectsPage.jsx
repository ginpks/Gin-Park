import React from 'react';
import "./projectsPage.css";
import { Link } from "react-router-dom";


function ProjectPage() {
    return (
    <div className="projects-page">
      <h1>hello</h1>
      <Link to="/Gin-Park">
        <button>Go Back</button>
      </Link>
    </div>
)}

export default ProjectPage;