import React from 'react';
import { Switch, Route, Fade } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

const Yeezy350Page = () => (
  <div><h1>Yeezy 350</h1></div>
);

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/yeezy350v2' component={Yeezy350Page}/>
      </Switch>
    </div>
  );
}

export default App;
