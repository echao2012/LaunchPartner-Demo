import React from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">LaunchPartner Demo</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/users">Profiles</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" onClick={() => cookies.remove('user')} href="/">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;