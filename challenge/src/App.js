import React from "react";
import { Route, Link, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Login from './components/Login'

class App extends React.Component {
  render() {
    return (
      <Router>

        <div className="App">
          <Route exact path="/loginpage">
            <Login />
          </Route>
        </div>
      </Router>


    )

  }
}


export default App;
