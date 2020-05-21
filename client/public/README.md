README 
Name: Easy Weather
Description: Easy Weather is a multi-page React app that pulls weather information from the following API: WeatherAPI.com. It was built with a friendly user interface incorporating React Bootstrap templates and used React Router for route matching. 
Status: Initial Release 
Why was our project built? : Easy Weather was built to provide a simple and easy to use weather app.  It also serves as a sample project for other users whom want to build similar react weather apps. 
Our Team:
This project was created by Alejandro Saenz and Marcella Garcia. We are both students of the Wyncode bootcamp full stack program. Alejandro comes from a creative marketing and management background and Marcella comes from a background in administration and politics. Our aspirations are to become proficient developers and become competitive candidates upon graduating the program and entering the workforce. 
Dependencies: 
Axios:  ^0.19.2 – A Javascript library used to make http requests from node.js.  
The fetch feature of the library was used in this project to perform transforms of JSON data from the weather API.
Express: 4.17.1 – Express is a web application framework that allows you to create robust APIs and web servers quickly. We used Express to run a live server of our project to see real time visual of our changes and errors. 
Moment 2.25.3 – Moment is a lightweight JS library for parsing, validating, manipulating, and formatting dates. We used Moment in this project to format the dates that we pulled from our API information for our weather forecast. 
React-Bootstrap: 1.0.1 – A popular front-end framework that works off of the React component model. React-Bootstrap was the building block of our project as we used it to create and organize all of our different functionalities and styling in different components. 
React-Router-Dom: 5.2.0 – React router is a collection of navigational components. It allows you to handle routes in a web app. We used React router to connect the components in our project and be able to share code among the project to have it all working together. 
Dotenv: 8.2.0 –  This is a zero-dependency module that loads environment variables from a .env file. We used this module to be able to hide our specific API key when uploading to Github but still be able to call within our project. 
Install : 
-	git clone this repo
-	cd into it.
-	yarn install
-	cd client && yarn install
-	Yarn Dev
Deploy: 
https://protected-lake-82664.herokuapp.com/