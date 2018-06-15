import React from 'react';
import Header from './header'

export default (props) => (
  <div className="app-wrapper">
    <Header/>
    <div className="container app-container">
      {props.children}
    </div>
  </div>
)