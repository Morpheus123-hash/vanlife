import React from 'react'
import img3 from "../images/image-55.png"
import "./Van3.css"

import { Link } from 'react-router-dom'



export const Van3 = () => {
  return (
    <section id='home'>
      <Link to="/vans" className='back-home' >Back to all vans</Link>
        <div className='modest'>

            <div className='van-infor'>
              <img src={img3} alt="" />
            </div>
            <div className='about-1'>
              <button className='btn-1'>Luxury</button>

              <h1>Reliable Red</h1>
              <h2>$100 <span>/day</span></h2>
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
  )
}