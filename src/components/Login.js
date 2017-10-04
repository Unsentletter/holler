import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div style={{ textAlign: 'center'}}>
      <Link to={'/login_form'}>
        <button className="btn">
        Login
        </button>
      </Link>
    </div>
  )
};

export default Login;