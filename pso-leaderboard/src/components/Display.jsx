import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/Display.module.css";
import PageTitleSetter from "./PageTitleSetter";

const Display = () => {
  return (
    <>
      <PageTitleSetter title="Display" />

      <div className={style.display}>
        <p>Display</p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/editor">Editor</Link>
        </nav>
      </div>
    </>
  );
};

export default Display;
