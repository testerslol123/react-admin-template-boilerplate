import React, {useState} from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';

import MainApp from './pages/Homepage';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Preferences from './pages/Preferences';
import useToken from './helpers/useToken';



function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return (<Login setToken={setToken} />)
  }

  
  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/preferences">
          <Preferences />
        </Route>
        <Route path="/">
          <MainApp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
