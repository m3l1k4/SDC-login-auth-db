import React from "react";
import { Route, Link, Redirect, Switch, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Vehicles from './components/Vehicles'
import useToken from './components/useToken'


function App() {
 

  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} path="/login" />
  }
  return (    
  <div  className="App">
    <BrowserRouter>
        <Switch>
          <Route  exact path="/" >
            <div className="gallary">
              <div className="gallary__grid">
                <Vehicles />
              </div>
            </div>
          </Route>
        </Switch>   
    </BrowserRouter>

 </div>
  )

}
// }


export default App;
