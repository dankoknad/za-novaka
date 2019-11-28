import React from 'react';
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <NavLink
            to="/a"
            activeClassName="activeRoute"
          >
            A
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/b"
            activeClassName="activeRoute"
          >
            B
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/c"
            activeClassName="activeRoute"
          >
            C
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
