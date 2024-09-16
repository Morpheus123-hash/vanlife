import React from 'react'
import img7 from "../images/Rectangle-162.png"
import img8 from "../images/image-57.png"
import { Link } from 'react-router-dom'
import "./Simple.css"

export const Simple = () => {
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
                    <img src={img7} alt="" />
                     <div className='price-1'>
                        <h2>Modest</h2>
                        <h2>$60<br /><span>/day</span></h2>
                     </div>
                    <button className='butt-4'>Simple</button>
                </div>

                <div className='simple-van-2'>
                    <img src={img8} alt="" />
                    <div className='price-1'>
                        <h2>Dreamfinder </h2>
                        <h2>$65<br /><span>/day</span></h2>
                     </div>
                     <button className='butt-4'>Simple</button>
                </div>
            </div>

            <div className='footer-1'>
             <p>&copy; 2022 #VANLIFE</p>
            </div>
        </section>
    )
}    