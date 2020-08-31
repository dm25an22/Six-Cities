import React from "react";

const WarringWrapper = ({children}) => {
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

export default WarringWrapper;
