import React from 'react';
import {BrowserRouter, Route, Switch, IndexRoute} from 'react-router-dom';

import Layout from '../layout';
import Home from '../components/home';
import About from '../components/about';

export default () => (
  <BrowserRouter>
    <Switch> 
      <Layout>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </Layout>
    </Switch>
  </BrowserRouter>
)
