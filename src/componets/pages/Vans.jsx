import React from 'react'
import "./Vans.css"

import { Link } from 'react-router-dom'


export const Vans = () => {
  return (
    <div>
   

{/* Cards */}
    <div  className='van-cards'>

          <h1 className='head-1'>Explore our van options</h1>
      <div className='buttons'>
       <Link to="/Simple"><button className='butt-1'>Simple</button></Link>
       <Link to="/Luxury"><button className='butt-2'>Luxury</button></Link>
       <Link to="/Rugged"><button className='butt-3'>Rugged</button></Link>
      </div>

    <div className='cards-1' >

      <div className='card-1'>
       <Link to="/Van1"><div className='image-1'></div></Link> 
        <div className='price-1'>
          <h2 className='name1' >Modest Explorer </h2>
        <h2 className='cash1'>$60<br /><span>/day</span></h2>
        </div>
        <Link to="/Simple"><button className='butt-4'>Simple</button></Link>
      </div>

        <div className='card-4'>
        <Link to="/Van4"><div className='image-4'></div></Link>
        <div className='price-4'>
          <h2  className='name1'>Beach Bum </h2>
        <h2 className='cash1'>$80<br /><span>/day</span></h2>
        </div>
      </div>

    </div>

    <div className='cards-2'>
      
      <div className='card-3'>
       <Link to="/Van3"><div className='image-3'></div></Link> 
        <div className='price-3'>
          <h2  className='name1'>Redliable red</h2>
        <h2 className='cash1'>$100<br /><span>/day</span></h2>
        </div>
        <Link to="/Luxury"><button className='butt-6'>Luxury</button></Link>
      </div>

      <div className='card-2'>
       <Link to="/van2"><div className='image-2'></div></Link> 
        <div className='price-2'>
          <h2  className='name1'>Dreamfinder </h2>
        <h2 className='cash1'>$65<br /><span>/day</span></h2>
        </div>
        <Link to="/Simple"><button className='butt-8'>Simple</button></Link>
      </div>


    </div>

    <div className='cards-3'>

      <div className='card-5'>
        <Link to="/Van5"><div className='image-5'></div></Link>
        <div className='price-5'>
          <h2  className='name1'>The Cruiser</h2>
        <h2 className='cash1'>$120<br /><span>/day</span></h2>
        </div>
        <Link to="/Luxury"><button className='butt-6'>Luxury</button></Link>
      </div>

      <div className='card-6'>
       <Link to="/Van6"><div className='image-6'></div></Link>
        <div className='price-6'>
          <h2  className='name1'>Green Wonder </h2>
        <h2 className='cash1'>$70<br /><span>/day</span></h2>
        </div>
        <Link to="/Rugged"><button className='butt-9'>Rugged</button></Link>
      </div> 

  </div>

   </div>
<br />
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
