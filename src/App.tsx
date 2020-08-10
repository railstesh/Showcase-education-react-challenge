import React from 'react';
import { Switch, Route } from "react-router-dom";
import { FrontPage, HomePage } from './screens/MainScreen/components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/dashboard" render={() => <FrontPage />} />
        <Route exact path='/' render={() => <HomePage />} />
      </Switch>
    </div>
  );
}

export default App;
