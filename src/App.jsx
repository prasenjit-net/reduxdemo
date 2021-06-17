import React from "react";
import AppNav from "./components/AppNav";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter basename="/reduxdemo">
      <Container>
        <AppNav />
        <h1>Redux Demo Application</h1>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
