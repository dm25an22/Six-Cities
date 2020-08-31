import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../enums";

const linkStyle = {
  textDecoration: `none`,
  listStyle: `none`,
  color: `inherit`,
  fontSize: `25px`
};

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        width: `100vw`,
        height: `100vh`,
        flexDirection: `column`
      }}
    >
      <h1 style={{fontSize: `45px`}}>Page not found 404</h1>
      <Link style={linkStyle} to={AppRoute.ROOT}>Go to main page</Link>
    </div>
  );
};

export default NotFoundPage;
