import React from 'react'
import img1 from "../images/image-53.png"
import { Link } from 'react-router-dom'
import "./Home.css"


export const Home = () => {
  return (
    <div>
       <div className='img-1'>
                  
                 <div className='dis'>
                  <h1 className='hed-1'>You got the travel plans, we got the travel vans.</h1> 
                  <p className='pp-1'>Add adventure to your life by joining the #vanlife movement.
                                      Rent the perfect van to make your perfect road trip.</p>
                  <Link to="/Vans" ><button className='but-1'>Find your van</button></Link>                   
                 </div> 
                
        </div>
        <div className='footer-1'>
             <p>&copy; 2022 #VANLIFE</p>
       </div>
    </div>
  )
}
