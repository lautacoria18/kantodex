import React from 'react'
import { NavLink } from 'react-router-dom';

import './NavMenu.css';
export default function NavMenu() {

  
  return (
      
      
      <div className='nav'>
    <ul>
        <li style={{"--i":5}}  >
            <NavLink className='navLink'
              to="/"
              exact
              role="button"
              tabIndex={0}
            >
                Home
            </NavLink>
        </li>
        <li style={{"--i":4}} >
            <NavLink className='navLink'
              to="/historia"
              exact
              role="button"
              tabIndex={0}
            >
                Cultura
            </NavLink>
        </li>
        {/*
        <li style={{"--i":3}}>
            <NavLink className='navLink'
              to="/gimnasios"
              exact
              role="button"
              tabIndex={0}
            >
                Pokedex
            </NavLink>
        </li>
  */}
        <li style={{"--i":2}}>
            <NavLink className='navLink'
              to="/gimnasios"
              exact
              role="button"
              tabIndex={0}
            >
                Gimnasios
            </NavLink>
        </li>
        <li style={{"--i":1}}>
            <NavLink className='navLink'
              to="/gimnasios"
              exact
              role="button"
              tabIndex={0}
            >
                Ciudades
            </NavLink>
        </li>
        </ul>
        
        </div>
        
        
        
  )
}
