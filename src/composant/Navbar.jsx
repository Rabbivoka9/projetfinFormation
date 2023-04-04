import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <nav className="navbar">
      <ul className="navbar-nav">
        <div>
           <li className="logo">
            <NavLink to="/" className="nav-link">
               <img className='imglo' src="/logocompassion.png" alt="" /> 
          </NavLink>
          </li>
        </div>
        <div className='dis'>
            <li className="nav-item">
            <NavLink to="/" className="nav-link">
            Apropos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Services" className="nav-link">
            Formation
            </NavLink>
          </li>
           <li className="nav-item">
            <NavLink to="/Apropos" className="nav-link">
            Département
            </NavLink>
          </li> 
          <li className="nav-item1">
            <NavLink to="/Contact" className="nav-link">
            Achat Parcelle
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact" className="nav-link">
            Faire un Don
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact" className="nav-link">
            Médias
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact" className="nav-link">
              Extension
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </div>
       
        
      </ul>
    </nav>
    </div>
    
    

  );
} export default Navbar;