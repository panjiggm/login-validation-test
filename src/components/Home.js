import React, { Fragment, useState } from "react";
import { Container } from "reactstrap";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

const credential = {
  email: "test@unsircle.com",
  password: "test@unsircle.com"
};

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState(false);
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleDataLogin = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginSuccess = () => {
    const { email, password } = login;
    if (email === credential.email && password === credential.password) {
      setIsLogin(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Fragment>
      <Navbar isLogin={isLogin} />
      <Container>
        <h2>Home</h2>
        {!isLogin ? (
          <LoginForm
            login={login}
            isLogin={isLogin}
            error={error}
            dataLogin={handleDataLogin}
            onLoginSuccess={loginSuccess}
          />
        ) : (
          <Dashboard login={login} />
        )}
      </Container>
    </Fragment>
  );
};

export default Home;
