import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login_button">
      <Link to={'/login_form'}>
        <button className="btn-large">
        Login
        </button>
      </Link>
    </div>
  )
};

export default Login;