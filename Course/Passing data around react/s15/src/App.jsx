import Body from "/src/components/Body.jsx";
import Header from "/src/components/Header.jsx";
import "./App.css";
import React from "react";

export const App = () => {

  const [userName, setUserName] = React.useState("Joe")

  return (
    <main>
      <Header
      user = {userName}
      ></Header>
      <Body
      user = {userName}
      ></Body>
    </main>
  );
};
