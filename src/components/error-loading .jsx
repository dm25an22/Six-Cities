import React from "react";
import PropTypes from "prop-types";

const ErrorLoading = ({messsage}) => {
  return (
    <div style={{ padding: `50px 20px` }}>
      <h2 style={{ textAlign: `center` }}>{messsage}</h2>
    </div>
  );
};

ErrorLoading.propTypes = {
  messsage: PropTypes.string.isRequired
};

export default ErrorLoading;
