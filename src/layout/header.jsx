import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container">
        <Link to="/" className="navbar-brand">
          <p>MdG</p>
        </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" >
                <Link className="nav-link" to="/" >Home</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to="/about" >About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}