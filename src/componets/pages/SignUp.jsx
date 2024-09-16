import React from 'react';
import { Link } from 'react-router-dom'
import './SignUp.css';

export const SignUp = () => {
  return (
    <section id="signup-page">
      <div className="signup-form">
        <h2>Create an Account</h2>
        <form>
          <label htmlFor="name"></label>
          <input type="text" id="name" required placeholder="Full Name:" />
          <label htmlFor="email"></label>
          <input type="email" id="email" required placeholder="Email address:" />
          <label htmlFor="password"></label>
          <input type="password" id="password" required placeholder="Password:" />
          <label htmlFor="confirmPassword"></label>
          <input type="password" id="confirmPassword" required placeholder="Confirm Password:" />
          <br />
          <br />
          <br />
          <Link to="/Login"><button type="submit">Sign Up</button></Link>
        </form>
        <p>Already have an account? <Link to="/Login"> <span className='colour'>Sign In</span></Link></p>
      </div>
<br />      
<br />    
<br />    
      <div className="footer-1">
        <p>&copy; 2022 #VANLIFE</p>
      </div>
    </section>
  );
};