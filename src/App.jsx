import react,{ usestate } from "react"
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Navbar } from "./componets/Navbar";
import { About } from './componets/pages/About';
import { Vans } from './componets/pages/Vans';
import { Van1 } from './componets/pages/Van1';
import { Van2 } from './componets/pages/Van2';
import { Van3 } from './componets/pages/Van3';
import { Van4 } from './componets/pages/Van4';
import { Van5 } from './componets/pages/Van5';
import { Van6 } from './componets/pages/Van6';
import { Home } from './componets/pages/Home';
import { Simple } from './componets/pages/Simple';
import { Luxury } from './componets/pages/Luxury';
import { Rugged } from './componets/pages/Rugged';
import { Login } from './componets/pages/Login';
import { SignUp } from './componets/pages/SignUp';
import { Lastpage } from './componets/pages/Lastpage';
import { Host } from './componets/pages/Host';







function App() {
  return (
    <div className='App'>
      <Navbar/>  
      <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/vans"element={<Vans/>}/>
        <Route path="/van1"element={<Van1/>}/>
        <Route path="/van2"element={<Van2/>}/>
        <Route path="/van3"element={<Van3/>}/>
        <Route path="/van4"element={<Van4/>}/>
        <Route path="/van5"element={<Van5/>}/>
        <Route path="/van6"element={<Van6/>}/>
        <Route path="/Simple"element={<Simple/>}/>
        <Route path="/Luxury"element={<Luxury/>}/>
        <Route path="/Rugged"element={<Rugged/>}/>
        <Route path="/Login"element={<Login/>}/>
        <Route path="/Signup"element={<SignUp/>}/> 
        <Route path="/Lastpage"element={<Lastpage/>}/> 
        <Route path="/Host"element={<Host/>}/> 
      </Routes>
      </div>
  );
}



export default App;
