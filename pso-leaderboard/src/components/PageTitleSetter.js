import React from "react";
import PropTypes from "prop-types";
import { HelmetProvider, Helmet } from "react-helmet-async";

const PageTitleSetter = ({ title }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Penalty Shootout: {title}</title>
      </Helmet>
    </HelmetProvider>
  );
};

PageTitleSetter.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitleSetter;
