import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './components/homepage/homepage.component';  

const BoatsPage = () => (
  <div>
    <h1>Under Construction</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/boats' component={BoatsPage} />
      </Switch>
    </div>
  );
}

export default App;
