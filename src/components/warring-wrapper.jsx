import React from "react";
import PropTypes from "prop-types";

const WarringWrapper = ({ children }) => {
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        width: `100vw`,
        height: `100vh`,
        flexDirection: `column`,
      }}
    >
      {children}
    </div>
  );
};

WarringWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WarringWrapper;
