import React from "react";
import { Link, useLocation } from "react-router-dom";

const location = useLocation();

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <li class="nav-item">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Search
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/saved" className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
            Saved
          </Link>
        </li>
      </div>
    </nav>
  );
}

export default Nav;
