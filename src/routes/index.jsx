import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import requireAuth from '../hoc/require_auth';

import Layout from '../layout';

import Home from '../components/home';
import About from '../components/about';
import Protected from '../components/protected';
import Login from '../components/login';

export default () => (
  <BrowserRouter>
    <Switch> 
      <Layout>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/protected" component={requireAuth(Protected)}/>
        <Route exact path="/login" component={Login}/>
      </Layout>
    </Switch>
  </BrowserRouter>
)
