import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../enums";
import { useSelector, useDispatch } from "react-redux";
import { getUserData, getAuthStatus } from "../../reducer/user/selector";
import { ActionCreator } from "../../reducer/app-state/app-state";

const Header = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector(getAuthStatus);
  const userData = useSelector(getUserData);

  const setInitialActiveLocation = () => {
    dispatch(ActionCreator.changeLocation(`Amsterdam`))
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              onClick={setInitialActiveLocation}
              to={AppRoute.ROOT}
              className="header__logo-link header__logo-link--active"
            >
              <img
                className="header__logo"
                src="../img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  to={`${authStatus ? AppRoute.FAVORITES : AppRoute.LOGIN}`}
                  className="header__nav-link header__nav-link--profile"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  {authStatus 
                    ?
                  <span className="header__user-name user__name">
                    {userData.email}
                  </span>
                    :
                    <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
