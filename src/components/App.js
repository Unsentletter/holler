import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Login from './Login';
import LoginForm from './LoginForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Login} />
            <Route exact path="/login_form" component={LoginForm} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
