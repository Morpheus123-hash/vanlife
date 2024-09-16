import React from 'react'
import { Link } from 'react-router-dom'

import "./About.css"

export const About = () => {
  return (
    <div>
      <div className='img-2'></div>
      <h1 className='hed-2'>Don't squeeze in a sedan when you could relax in a van.</h1>

      <p className='pp-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit tempora <br /> qui 
         cumque exercitationem ex, esse quibusdam ratione ullam quas voluptas 
         in  <br /> ut nisi dolor libero odio labore? Tempore nulla animi voluptatibus.</p>

         <p className='pp-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Molestias et doloribus at quae temporibus aut dicta consequatur
           esse ipsum?</p>

           <div className='sic-4'>
              <h1 className='hed-3'>Your destination is waiting. <br /> You van is ready.</h1>
                <Link to="/vans"><button className='but-2'>Explore our vans</button></Link>
           </div>
<br />
<br />
<br />
<br />
           <div className='footer-1'>
             <p>&copy; 2022 #VANLIFE</p>
            </div>
      
    </div>
  )
}
