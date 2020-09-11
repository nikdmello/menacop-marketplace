import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopSneakers from './pages/shop-sneakers/shop-sneakers';
import SignInOrRegisterPage from './pages/signin-or-register-page/signin-or-register-page';
import { auth } from './firebase/firebase.utils';

const Yeezy350Page = () => (
  <div><h1>Yeezy 350</h1></div>
);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/yeezy350v2' component={Yeezy350Page}/>
          <Route path='/shop-all' component={ShopSneakers}/>
          <Route path='/sign-in' component={SignInOrRegisterPage}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
