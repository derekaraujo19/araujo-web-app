import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        >
          HOME
      </NavLink>
      <NavLink
        to="/music"
        exact
      >
        MUSIC
      </NavLink>
      <NavLink
        to="/comments"
        exact
      >
        COMMENTS
      </NavLink>
      <NavLink
        to="/resume"
        exact
      >
        RESUME
      </NavLink>

    </div>
  );
}

export default NavBar;