import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthStatus } from "../reducer/user/selector";
import { AppRoute } from "../enums";

const PrivateRoute = ({ exact, path, render }) => {
  const authStatus = useSelector(getAuthStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        if (authStatus) {
          return render(props);
        } else {
          return <Redirect to={AppRoute.ROOT} />;
        }
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
