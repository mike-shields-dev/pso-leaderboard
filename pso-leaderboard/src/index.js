import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Display from "./components/Display";
import Editor from "./components/Editor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="display" element={<Display />} />
        <Route path="editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
