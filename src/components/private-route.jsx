import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../reducer/user/selector';
import { AppRoute } from '../enums';

const PrivateRoute = ({exact, path, render}) => {
  const authStatus = useSelector(getAuthStatus);

  return (
    <Route 
      exact={exact}
      path={path}
      render={(props) => {
        if (authStatus) {
          return render(props);
        } else {
          return <Redirect to={AppRoute.ROOT} />
        }
      }}
    />
  );
};

export default PrivateRoute;