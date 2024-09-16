import React from 'react';
import './Lastpage.css';
import { Link } from 'react-router-dom'

export const Lastpage = () => {
  return (
    <section id="not-found-page">
      <div className="not-found-content">
        <h2>Sorry, the page you were looking for was not found.</h2>
        <Link to="/"><button className="return-home-btn">Return to Home</button></Link>
      </div>
      <br />
<br />
<br />
<br />
<br />
<br />
<br />
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