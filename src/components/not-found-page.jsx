import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../enums";
import WarringWrapper from "./warring-wrapper";

const linkStyle = {
  textDecoration: `none`,
  listStyle: `none`,
  color: `inherit`,
  fontSize: `25px`,
};

const NotFoundPage = () => {
  return (
    <WarringWrapper>
      <h1 style={{ fontSize: `45px` }}>Page not found 404</h1>
      <Link style={linkStyle} to={AppRoute.ROOT}>
        Go to main page
      </Link>
    </WarringWrapper>
  );
};

export default NotFoundPage;
