import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  color: "#D3D3D3",
};

function NavBar() {
  return (
    <div className="Nav">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{color: "white", background: "black"}}
        >
          HOME
      </NavLink>
      <NavLink
        to="/music"
        exact
        style={linkStyles}
        activeStyle={{color: "white", background: "black"}}
      >
        MUSIC
      </NavLink>
      <NavLink
        to="/comments"
        exact
        style={linkStyles}
        activeStyle={{color: "white", background: "black"}}
      >
        COMMENTS
      </NavLink>
      <NavLink
        to="/resume"
        exact
        style={linkStyles}
        activeStyle={{color: "white", background: "black"}}
      >
        RESUME
      </NavLink>

    </div>
  );
}

export default NavBar;