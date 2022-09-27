import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/Home.module.css";
import PageTitleSetter from "./PageTitleSetter";

const Home = () => {
  return (
    <>
      <PageTitleSetter title="Home" />

      <div className={style.home}>
        <p>Home</p>
        <nav>
          <Link to="/display">Display</Link>
          <Link to="/editor">Editor</Link>
        </nav>
      </div>
    </>
  );
};

export default Home;
