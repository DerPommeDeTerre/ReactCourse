//This file is the main React component - a functional component that defines the structure and behavior of the UI

// Define a functional component named App
function App() {
  // Create a new Date object representing the current date and time

  const currDate = new Date();

  // Return the JSX layout that will be rendered in the browser
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

//Export the App component so it can be imported in other files (like main.jsx)
export default App;