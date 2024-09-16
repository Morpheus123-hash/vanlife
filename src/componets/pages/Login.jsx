import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <section id="login-page">
      <div className="login-form">
        <h2>Sign in to your account</h2>
        <form>
          <label htmlFor="email"></label>
          <input type="email" id="email" required placeholder="Email address:" />

          <label htmlFor="password"></label>
          <input type="password" id="password" required placeholder="Password:" />
          <br />
          <br />
          <br />
          <Link to="/lastpage"><button type="submit">Sign in</button></Link>
        </form>
        <p>Don't have an account? <Link to="/signup"><span className='colour'>Create one now</span></Link></p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="footer-1">
        <p>&copy; 2022 #VANLIFE</p>
      </div>
    </section>
  );
};