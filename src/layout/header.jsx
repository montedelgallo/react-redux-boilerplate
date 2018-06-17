import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Header extends Component {


  // This is just for boilerplate purposes


  renderLinks() {
    if (this.props.authenticated) {
      return (
        <li className="nav-item">
          <button className="btn btn-danger" onClick={this.props.signoutUser}>
            SignOut
          </button>
        </li>
      )
    } else {
      return (
        <li className="nav-item" key={4}>
          <Link className="btn btn-success" to="/login" >Login</Link>
        </li>
      )
    }    
  }

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
              <li className="nav-item" >
                <Link className="nav-link" to="/protected" >Protected</Link>
              </li>
              {this.renderLinks()}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  // this state its gonna be null unless there is an error
  return {authenticated: state.auth.authenticated}
}

export default connect(mapStateToProps, actions)(Header)