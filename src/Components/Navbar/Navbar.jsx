import React from 'react'
import './Navbar.css';
import logo from '../Assets/Logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (

    
    <div className='navbar'>

        {/*logo */}
      <div className="nav-logo">
        <img className="logo"src={logo} alt="" />
        <h2>Futu
            <font color="orangered">re</font>
          
            </h2>
        </div>  

      <ul className="nav-menu">
        <li className='Home'>Home</li>
        <li>Company</li>
        <li>Services</li>
        <li>Help</li>
        <li>About</li>
        <li className='login'> <Link to='/Login'>Login</Link></li>
      </ul>
      
        {/*login button 
      <div className="nav-login">
        <button>Login</button>
      </div>
    */}
    </div>
  )
}

export default Navbar
