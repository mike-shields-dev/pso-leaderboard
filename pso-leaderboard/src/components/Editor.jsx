import React from "react";
import { Link } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Editor = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Penalty Shootout: Editor</title>
        </Helmet>
      </HelmetProvider>
      <p>Editor</p>
      <Link to="/">Home</Link>
      <Link to="/display">Display</Link>
    </div>
  );
};

export default Editor;
