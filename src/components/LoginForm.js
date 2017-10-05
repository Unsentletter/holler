import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUserInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value })
  }

  onFormSubmit(event) {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    if (this.validateUsername(username) && this.validatePassword(password)) {
      setTimeout(
        this.stripAndReversePassword(username, password)
      , 500)
    } else {
      alert("Login Failed")
    }
  }

  validateUsername(username) {
    return username.length > 3;
  }

  validatePassword(password) {
    const regExp = /^[a-z]+$/;
    return !password.match(regExp) && password.length > 3
  }

  stripAndReversePassword(username, password) {
    const strippedUsername = username.replace(/\W/g, '').toLowerCase();
    const strippedPassword = password.replace(/\W/g, '').toLowerCase();
    const reversedPassword = strippedPassword.split("").reverse().join("").toLowerCase();

    if (reversedPassword === strippedUsername) {
      alert("You Logged In!")
    } else {
      alert("Login Failed")
    }
  }

  render() {
    return (
      <div>
        <div className="login_box">
          <form onSubmit={(event) => this.onFormSubmit(event)}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={(event) => this.handleUserInput(event)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(event) => this.handleUserInput(event)}
            />
            <button
              type="submit"
              className="btn"
            >
              <i>Submit</i>
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;