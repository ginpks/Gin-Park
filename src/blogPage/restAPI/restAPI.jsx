import "./restAPI.css";
import { Link } from 'react-router-dom';
import express from '../../assets/restapi/express.png';
import node from '../../assets/restapi/node.png';
import get from '../../assets/restapi/get.png';
import post from '../../assets/restapi/post.png';
import testget from '../../assets/restapi/testget.png';
import testpost from '../../assets/restapi/testpost.png';
import data from '../../assets/restapi/data.png';
import hello from '../../assets/restapi/hello.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons'; 




const RestAPI = () => {

    // Function to scroll to the top smoothly
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: for smooth scrolling
        });
        // Alternatively, if you want to scroll specifically to the #top div:
        // const topElement = document.getElementById('top');
        // topElement?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
    <div id="top">
        <div className="backbutton">
            <span id="arrow"><a id="back"><Link to="/blog">&#10550;</Link></a></span>
        </div>
        <div className="header">
            <h1>A Guide to REST APIs</h1>
        </div>
        <div className="tutorial">
            <p>This guide will take you through the steps of designing your very own REST API.
    
            For this tutorial, we will be using the Node.js and Express.js libraries.
 
            Please ensure that you have <a href="https://nodejs.org/en/download/" target="_blank">Node.js installed</a> on your machine.

            <br></br>
            <br></br>
            </p>
            <h1 id="setup">SETUP:</h1>
            <br></br>
            <br></br>

            <p>Start by creating a directory of your choosing.
                Inside that directory, you need to initialize a new node project by running the following command in your terminal:
            </p>
            <h1 id="rest">npm init -y</h1>
            <p>This command initializes a package.json file in your root directory, providing all the necessary 
                dependencies and metadata for your node project.
            </p>
            <p>Next, in your terminal, run:</p>
            <h1 id="rest">npm install express</h1>
            <p>The Express library will be used to build our REST API, helping to define our routes
                and handle HTTP requests/returns.
            </p>

            <br></br>
            <br></br>
            <h1 id="development">DEVELOPMENT:</h1>
            <br></br>
            <br></br>

            <p>We'll start by creating a file in our directory called server.js, <br></br>but feel free to name it whatever you want</p>
            <img id="express" src={express} alt="express code" />
            <p id="express-setup">We first import the express library into our script (1). We then intialize the express server,<br></br>
                assigning it to a variable called 'app' (3). Think of app as the main 'object' that represents our express server.
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
                If you enter "node server.js" in the terminal,<br></br>
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
            <p>Above, we are defining a route handler for HTTP GET requests made to the root path '/' (1).<br></br>
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
            <h1 id="testing">TESTING OUR REST API:</h1>
            <br></br>
            <br></br>
            <p>
                Congrats! we've succesfully immplemented our REST API. We set up an express server and <br></br>
                defined endpoints that respond to specific HTTP methods "GET" and "POST". <br></br><br></br>
                Now it's time to test it out. \(ˆ˚ˆ)/  
            </p> <br></br><br></br>
            <p>
                We could test out these endpoints by using <a href="https://www.postman.com/" target="_blank">Postman</a> or <a href="https://curl.se/" target="_blank">cURL</a>.
                Instead, we'll create a file<br></br> simulating our frontend from which we will make requests from.<br></br>
                In the same directory, create a file called "client.js" or any name of your choosing.
            </p>
            <img id ="gettest" src={testget} alt="get test code" />
            <p>
                Above we are sending an HTTP GET request to the server running at 'http://localhost:3000/'. <br></br>
                We do this by calling the 'fetch' function, passing in the specified URL (2). <br></br>
                The 'fetch' function returns a response object, which we store in the 'response' variable. <br></br><br></br>
                We then read the body of the response and parse it as JSON data,  <br></br>storing it in the 'data' variable (3). <br></br>
                Keep in mind we are using 'async' and 'await' because these operations take time to complete. <br></br> <br></br>
                Then we log the data's message attribute which should be "Hello World!" (4) <br></br>
                Make a call to the function, and then in a separate terminal, run "node client.js". <br></br>
                You should see the message be logged to the terminal:
            </p>
            <img id="hello" src={hello} alt="hello code" />
            <br></br>
            <p>
                Cool, now let's test the POST endpoint:
            </p>
            <img src={testpost} alt="post test code" />
            <p>Now we are sending an HTTP GET request to the server.<br></br>
            On line (8) we are creating a JavaScript object containing the message we want to send <br></br>
            and storing it in 'payload'. <br></br> <br></br>
            Then we use the 'fetch' function to make a request to the server. (11) <br></br>
            Note that we have to pass in an object specifying the method as "POST" <br></br>
            because we want to 'send' data. <br></br> <br></br>
            The headers attribute, mentioned earlier, tells the server that the data we <br></br>
            are sending in the body is in JSON format (13). <br></br><br></br>
            We then set the body of the request. This is the actual data being sent (16). <br></br>
            'JSON.stringify' converts our JavaScript 'payload' object into a JSON string. <br></br>
            We then log the 'responseData' that we receive back from the server which  
            we know <br></br> should be "Data received" (18): <br></br>
            </p>
            <img id="data" src={data} alt="datacode" />
            <br></br>
            <br></br>
            <h1 id="testing">CONCLUSION:</h1>
            <br></br>
            <br></br>
            <p>Hooray! \(ˆ˚ˆ)/ We've implemented a simle REST API with Node and Express and confirmed that it works by sending requests 
            from the frontend! <br></br> There are many more tools provided by Express that we haven't gone over. <br></br>
            Feel free to take a look at the API documentation <a href="https://expressjs.com/en/5x/api.html" target="_blank">here</a>.
            </p>

            

        </div>
        <footer>
        <span id="arrow">                
                <a
                    id="back"
                    onClick={handleScrollToTop}
                    style={{ cursor: 'pointer' }} // Make it look clickable
                >
                    back to top
                </a></span>
        <FontAwesomeIcon icon={faCat} className="footer-icon"/>
        <span id="arrow"><a id="back"><Link to="/blog">back to blogs </Link></a></span>
        </footer>
    </div>
    )
}

export default RestAPI;
                                                                
