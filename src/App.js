// App.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Cards from "./components/Cards";

function App() {
  const [view, setView] = useState("login");

  const renderView = () => {
    switch (view) {
      case "login":
        return <LoginForm />;
      case "register":
        return <RegisterForm />;
      case "catalog":
        return <Cards />;
      default:
        return <LoginForm />;
    }
  };

  return (
    <div className="App">
      <Header setView={setView} />
      <div className="container text-center mb-4">
        <h1>{view.charAt(0).toUpperCase() + view.slice(1)}</h1>
      </div>
      {renderView()}
    </div>
  );
}

export default App;
