import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Login extends Component{

    handleSubmit(e) {
        e.preventDefault();
        this.props.signinUser();
    }

    render() {

        if (!this.props.authenticated) {
            return (
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body bg-light">
                    <form className="form-signin" onSubmit={this.handleSubmit.bind(this)}>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" />
                        <label className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                        
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                    </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body bg-light">
                        <h1>Logged In</h1>
                    </div>
                </div>
            )
        }
        
    }
}

function mapStateToProps(state) {
  // this state its gonna be null unless there is an error
  return {authenticated: state.auth.authenticated}
}

export default connect(mapStateToProps, actions)(Login)