import React from "react";
import { Link, withRouter } from "react-router-dom";
import './navigation.css';
import Bg from './Background'

function Navigation(props) {
  return (
    <header>
    <div className='gradientNav'>
      <Bg/>
      <nav class="navbar navbar-expand-md">
        <div class = 'topnav'>
          <Link class="navbar-brand" to="/">
          </Link>
          <div class = 'container'>
            <ul class="navbar-nav">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/" style={{color: "white"}}>
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about" style={{color: "white"}}>
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact" style={{color: "white"}}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </header>
  );
}

export default withRouter(Navigation);
