import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/login' : '/'}
            className="left brand-logo"
          >
            Holler
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;