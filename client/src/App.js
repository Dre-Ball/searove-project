import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './components/homepage/homepage.component';  
import Header from './components/header/header.component';

const BoatsPage = () => (
  <div>
    <h1>Under Construction</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/boats' component={BoatsPage} />
      </Switch>
    </div>
  );
}

export default App;
