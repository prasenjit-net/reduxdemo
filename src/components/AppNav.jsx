import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { createLoginAction, createLogoutAction } from "../store/actions";
import AppNavLink from "./AppNavLink";

const AppNav = () => {
  const [username, setUsername] = useState("");
  const loginData = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const doLogin = () => {
    dispatch(createLoginAction(username));
    setUsername("");
  };
  const doLogout = () => {
    dispatch(createLogoutAction());
    setUsername("");
  };
  const name = loginData.authenticated ? loginData.username : "Guest";
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" as={AppNavLink}>
        <span className="title-case">Welcome {name}</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <AppNavLink to="/">Home</AppNavLink>
        </Nav>
        <Nav className="mr-auto">
          <AppNavLink to="/about">About</AppNavLink>
        </Nav>
        <Form inline>
          {!loginData.authenticated && (
            <>
              <FormControl
                type="text"
                placeholder="Username"
                className="mr-sm-2"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <Button variant="outline-success" onClick={doLogin}>
                Login
              </Button>
            </>
          )}
          {loginData.authenticated && (
            <Button variant="outline-warning" onClick={doLogout}>
              Logout
            </Button>
          )}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNav;
