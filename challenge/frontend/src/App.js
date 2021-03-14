import React from "react";
import { Route, Link, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import Vehicles from './components/Vehicles'

class App extends React.Component {
  render() {
    return (
      <Router>

        <div className="App">
          <Route exact path="/loginpage">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="vehicles">
            <Vehicles/>
          </Route>


        </div>
      </Router>


    )

  }
}


export default App;
