import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Content1 from '../Content1';
import Content2 from '../Content2';
import HomeTest from '../HomeTest';
  
  export default function RouterTest() {
    return (
      <Router>
          <Switch>
            <Route path="/" exact children={<HomeTest/>} />
            <Route path="/Content1" children={<Content1/>} />
            <Route path="/Content2" children={<Content2/>} />
          </Switch>
      </Router>
    )
  }