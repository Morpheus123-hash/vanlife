import React from 'react'
import img6 from "../images/Rectangle-156.png"
import "./Van6.css"

import { Link } from 'react-router-dom'



export const Van6 = () => {
  return (
    <section id='home'>
      <Link to="/vans" className='back-home' >Back to all vans</Link>
        <div className='modest'>

            <div className='van-infor'>
              <img src={img6} alt="" />
            </div>
            <div className='about-1'>
              <button className='btn-1'>Rugged</button>

              <h1>Green Wonder</h1>
              <h2>$70 <span>/day</span></h2>
              <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Vel quasi eaque iste culpa temporibus perferendis natus atque corrupti doloremque? Nisi, 
                 temporibus autem minima maxime velit eligendi aperiam architecto earum quaerat odit. 
                 Error reprehenderit quibusdam quisquam odit asperiores, mollitia explicabo sequi quae? Aliquid dolorem, 
                 corrupti rerum fugiat deleniti tempore eius ea alias, aut pariatur officiis iusto cum placeat quisquam tenetur a, 
                 distinctio voluptatem earum molestiae dolorum. Eveniet, nulla fugit.
              </p>
            </div>
            <Link to="/Login"><button className='btn-2'>Rent this van</button></Link>
        </div>
<br />
<br />
<br />
            <div className='footer-1'>
             <p>&copy; 2022 #VANLIFE</p>
            </div>
    </section>
  )}
