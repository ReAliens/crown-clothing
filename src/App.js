import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const Hatpage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={Hatpage} />
      </Switch>


    </div>
  );
}

export default App;