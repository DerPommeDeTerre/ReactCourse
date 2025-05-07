//This file is an entry point for the React application

//Import React library
import React from 'react';
//Import React DOM client to interact with the DOM
import ReactDOM from 'react-dom/client';
//Import the main application component
import App from './App';

//Create a root where the React App will be mounted, using the elemnt with the id="root"
const root = ReactDOM.createRoot(document.getElementById('root'));

//Render the App component inside the root
function ref() {
  root.render(<App/>);
}

//Cal the function to update it
setInterval(ref, 1000);