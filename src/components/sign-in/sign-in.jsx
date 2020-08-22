import React, { useState } from "react";
import Header from "../header/header";
import { useDispatch, useSelector } from "react-redux";
import { Operation } from "../../reducer/userReducer/userReducer";
import { useHistory, Redirect } from "react-router-dom";
import { getAuthStatus } from "../../reducer/userReducer/selector";
import { AppRoute } from "../../enums";

const SignIn = () => {
  const dispatch = useDispatch();

  const authStatus = useSelector(getAuthStatus);
  const history = useHistory();
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [error, setError] = useState(false);

  if (authStatus) {
    return <Redirect to={AppRoute.ROOT} />
  }

  const onSuccess = () => {
    return history.goBack();
  };

  const onError = () => {
    setPassword(``);
    setError(true);
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={(evt) => {
                evt.preventDefault();
                const userData = {
                  email,
                  password,
                }

                dispatch(
                  Operation.login(
                    userData,
                    onSuccess,
                    onError
                  )
                );
              }}
              className="login__form form"
              action="#"
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  onChange={(evt) => {
                    if (error) {
                      setError(false);
                    }

                    setEmail(evt.target.value);
                  }}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  onChange={(evt) => {
                    setPassword(evt.target.value);
                  }}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
            {error && (
              <div style={{ padding: `20px 0`, color: `red` }}>
                Registration failed. <br /> Check your email address
              </div>
            )}
          </section>
          <section className="locations locations--login locations--current"></section>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
