import React from "react";
import "../styles/app.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
};

export default App;
