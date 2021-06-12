import React from "react";
import { NavLink } from "react-router-dom";

const AppNavLink = (props) => {
  return (
    <NavLink
      to={props.href ? props.href : props.to}
      className="nav-link"
      {...props}
    >
      {props.children}
    </NavLink>
  );
};

export default AppNavLink;
