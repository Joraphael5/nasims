import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Federal Ministry of Humanitarian Affairs,
            <br />
            Disaster Management and Social
            <br />
            Development
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link class="nav-link" to="/About">
                About
              </Link>
              <Link class="nav-link" to="/News">
                News
              </Link>
              <Link class="nav-link" to="/Contact">
                Contact
              </Link>
              <Link
                to="/Login"
                class="btn btn-success btn-lg mt-3 mx-4 justify-content-end"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
