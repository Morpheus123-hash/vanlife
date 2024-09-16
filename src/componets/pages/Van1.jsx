import React from 'react';
import img1 from "../images/Rectangle-162.png";
import "./Van1.css";
import { Link } from 'react-router-dom';

export const Van1 = () => {
  const handleRentThisVanClick = () => {
    // Code to be executed when the button is clicked
    console.log('Rent this van button clicked');
  };

  return (
    <section id="home">
    <Link to="/vans" className="back-home">Back to all vans</Link>
    <div className="modest">
      <div className="van-infor">
        <img src={img1} alt="" />
      </div>
      <div className="about-1">
        <button className="btn-1">Simple</button>
  
        <h1>Modest Explorer</h1>
        <h2>$60 <span>/day</span></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vel quasi eaque iste culpa temporibus perferendis natus atque corrupti doloremque? Nisi,
          temporibus autem minima maxime velit eligendi aperiam architecto earum quaerat odit.
          Error reprehenderit quibusdam quisquam odit asperiores, mollitia explicabo sequi quae? Aliquid dolorem,
          corrupti rerum fugiat deleniti tempore eius ea alias, aut pariatur officiis iusto cum placeat quisquam tenetur a,
          distinctio voluptatem earum molestiae dolorum. Eveniet, nulla fugit.
        </p>
      </div>
      <Link to="/login"><button className="btn-2" onClick={handleRentThisVanClick}>Rent this van</button></Link>
      
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


