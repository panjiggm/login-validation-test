import React from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

const LoginForm = ({
  login,
  error,
  isLogin,
  dataLogin,
  onLoginSuccess,
  onLoginError
}) => {
  const handleSubmit = e => {
    e.preventDefault();

    onLoginSuccess();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="text"
          name="email"
          value={login.email}
          onChange={dataLogin}
          placeholder="Email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          value={login.password}
          onChange={dataLogin}
          placeholder="Password"
        />
      </FormGroup>
      <FormGroup>
        <Button color="primary">Login</Button>
      </FormGroup>
      {error ? (
        <Alert color="danger">
          Login Tidak Berhasil! Email dan Password tidak terdaftar!
        </Alert>
      ) : (
        <Alert color="success">Silahkan Login</Alert>
      )}
    </Form>
  );
};

export default LoginForm;
