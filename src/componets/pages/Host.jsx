import React from 'react';
import './Host.css';

export const Host = () => {
  return (
    <section id="dashboard-page">
      <header className="header">
        <h1>#CarRental</h1>
        <nav>
          <ul>
            <li><a href="#">Host</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Vans</a></li>
          </ul>
        </nav>
      </header>

      <main className="dashboard-content">
        <h2>Welcome!</h2>
        <div className="dashboard-stats">
          <div className="income-stats">
            <h3>Income last 30 days</h3>
            <p>$2,260</p>
            <a href="#">Details</a>
          </div>
          <div className="review-stats">
            <h3>Review score</h3>
            <p><span className="star-rating">★★★★★</span> 5.0/5</p>
            <a href="#">Details</a>
          </div>
        </div>

        <div className="listed-vans">
          <h3>Your listed vans</h3>
          <a href="#">View all</a>
          <ul>
            <li>
              <img src="van1.jpg" alt="Modest Explorer" />
              <div>
                <h4>Modest Explorer</h4>
                <p>$60/day</p>
                <a href="#">Edit</a>
              </div>
            </li>
            <li>
              <img src="van2.jpg" alt="Beach Bum" />
              <div>
                <h4>Beach Bum</h4>
                <p>$80/day</p>
                <a href="#">Edit</a>
              </div>
            </li>
            <li>
              <img src="van3.jpg" alt="Green Wonder" />
              <div>
                <h4>Green Wonder</h4>
                <p>$70/day</p>
                <a href="#">Edit</a>
              </div>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer-1">
        <p>&copy; 2022 #VANLIFE</p>
      </footer>
    </section>
  );
};