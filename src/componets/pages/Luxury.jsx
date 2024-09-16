import React from 'react'
import img9 from "../images/image-55.png"
import img10 from "../images/Rectangle-153.png"
import { Link } from 'react-router-dom'
import "./Simple.css"

export const Luxury = () => {
    return (
        <section id='vans-1'>

      <div className='buttons'>
       <Link to="/Simple"><button className='butt-1'>Simple</button></Link>
       <Link to="/Luxury"><button className='butt-2'>Luxury</button></Link>
       <Link to="/Rugged"><button className='butt-3'>Rugged</button></Link>
       <Link to="/Vans" className='link-1'>Clear fliters</Link>
      </div>
<br />
<br />
<br />
            <div className='thebox-1'>
                <div></div>
                <div className='simple-van-1'>
                    <img src={img9} alt="" />
                     <div className='price-1'>
                        <h2>Reliable Red</h2>
                        <h2>$100<br /><span>/day</span></h2>
                     </div>
                    <button className='butt-6'>Luxury</button>
                </div>

                <div className='simple-van-2'>
                    <img src={img10} alt="" />
                    <div className='price-1'>
                        <h2>The Cruiser </h2>
                        <h2>$120<br /><span>/day</span></h2>
                     </div>
                     <button className='butt-6'>Luxury</button>
                </div>
            </div>
            <div className='footer-1'>
             <p>&copy; 2022 #VANLIFE</p>
            </div>
        </section>
    )
} 