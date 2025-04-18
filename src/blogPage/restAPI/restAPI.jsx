import "./restAPI.css";
import { Link } from 'react-router-dom';
import express from '../../assets/restapi/express.png';
import node from '../../assets/restapi/node.png';
import routes from '../../assets/restapi/routes.png';
import get from '../../assets/restapi/get.png';
import post from '../../assets/restapi/post.png';


const RestAPI = () => {
    return (
    <div>
        <div className="backbutton">
            <span id="arrow"><a id="back"><Link to="/blog">&#10550;</Link></a></span>
        </div>
        <div className="header">
            <h1>A Guide to REST APIs</h1>
        </div>
        <div className="tutorial">
            <p>This guide will take you through the steps of designing your very own REST API.
            <br></br>
            For this tutorial, we will be using the Node.js and Express.js libraries.
            <br></br>
            Please ensure that you have <a href="https://nodejs.org/en/download/" target="_blank">Node.js installed</a> on your machine.

            <br></br>
            <br></br>
            </p>
            <h1 id="setup">SETUP:</h1>
            <br></br>
            <br></br>

            <p>Start by creating a directory of your choosing.<br></br>
                Inside that directory, you need to initialize a new node project by running the <br></br> following command in your terminal:
            </p>
            <h1 id="rest">npm init -y</h1>
            <p>This command initializes a package.json file in your root directory,<br></br> providing all the necessary 
                dependencies and metadata for your node project.
            </p>
            <p>Next, in your terminal, run:</p>
            <h1 id="rest">npm install express</h1>
            <p>The Express library will be used to build our REST API, helping to define our routes <br></br>
                and handle HTTP requests/returns.
            </p>

            <br></br>
            <br></br>
            <h1 id="setup">DEVELOPMENT:</h1>
            <br></br>
            <br></br>

            <p>We'll start by creating a file in our directory called server.js, <br></br>but feel free to name it whatever you want</p>
            <img id="express" src={express} alt="express code" />
            <p id="express-setup">We first import the express library into our script (1). We then intialize the express server, <br></br>
                assigning it to a variable called 'app' (3). Think of app as the main 'object' that represents <br></br>our express server.
                <br></br><br></br>We then define our port number '3000' from which our express server will live on (5). <br></br><br></br>
                Next, we'll instruct our express server to use the middleware 'express.json' (7).<br></br> 
                This allows any incoming 
                data containing JSON to be understood by the server.
                <br></br> 
                Specifically, it parses incoming 
                requests that have a 'Content-Type' header of 'application/json'.
                <br></br>
                <br></br>
                Finally, we will start the server passing in the port and a callback function,<br></br>
                confirming that the server started (9).
                If you enter "node server.js" in the terminal, <br></br>
                the express server should successfully launch and log to the terminal:
            </p>
            <img id="node-img" src={node} alt="node code" />
            <br></br>
            <br></br>
            <p>
                Awesome! Now we can get started on defining our routes for handling HTTP requests.
                <br></br>
                For now, we will only focus on handling "get" and "post" requests.
            </p>
            <br></br>
            <img id="get" src={get} alt="get code" />
            <p>Above, we are defining a route handler for HTTP GET requets made to the root path '/' (1).<br></br>
                When a client sends a GET request to 'http://localhost:3000/', this function will run.<br></br><br></br>
                '(req, res)' are the request and response objects provided by Express. <br></br>
                'req' contains information about the incoming request. <br></br>
                'res' is used to send a response back to the client. <br></br><br></br>
                In this case, we are sending a response back in the form of a javascript object <br></br>
                containing the message: "Hello World!" (2).<br></br>
                Express will automatically set the 'Content-Type' header to 'application/json' and <br></br> 
                send the object as a JSON string.
            </p>
            <br></br><br></br>
            <img id="post" src={post} alt="post code" />
            <p>Now we are defining the route handler for HTTP POST requests made to the same root path (7). <br></br>
                We store the body of the request in 'receivedData' (8). <br></br><br></br>
                Because we used the express.json middleware
                when configuring our express server earlier, <br></br>
                if the request contained JSON data, 'req.body' will hold the parsed JavaScript object.
                <br></br> <br></br>
                On line (10), we are simply logging that received data, first converting <br></br> 
                the JavaScript object back into a JSON string for display. <br></br>
                Then we send a text response back to the client, confirming that the data was received! (12).
            </p>
            <br></br>
            <br></br>
            <h1 id="setup">TESTING OUR REST API:</h1>
            <br></br>
            <br></br>
            <p>
                Congrats! we've succesfully immplemented our REST API. We set up an express server and <br></br>
                defined endpoints that respond to specific HTTP methods "GET" and "POST". <br></br><br></br>
                Now it's time to test it out. \(ˆ˚ˆ)/  
            </p>

            
        </div>
    </div>
    )
}

export default RestAPI;
                                                                
