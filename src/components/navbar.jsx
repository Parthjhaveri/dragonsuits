import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/App.css';
import logo from '../images/logo.jpg';

const Navbar = props => {
return 	<div className='app-main-nav'>
        	
        	<NavLink to='/'>
   			<img src={logo} className='app-main-nav__nav-logo' alt='Logo' tabIndex='1' />
   			</NavLink>

   			<div className='app-main-nav__nav-mid-wrapper'>
   				<ul className='nav-mid-wrapper__links-ul'>
   					<li tabIndex='2' className='links-ul__link'>
   						<NavLink 	to='/shop' 
   									style={{ color: 'black', textDecoration: 'none' }}
   									activeStyle={{ color: '#c36cab', fontWeight: 400}}>
   									Shop
   						</NavLink>
   					</li>
   					
   					<li tabIndex='3' className='links-ul__link'>
   						<NavLink 	to='/accessories'
   									style={{ color: 'black', textDecoration: 'none' }}
   									activeStyle={{ color: '#c36cab', fontWeight: 400}}>
   									Accessories
   						</NavLink>
   					</li>
   					
   					<li tabIndex='4' className='links-ul__link'>
   						<NavLink 	to='/about'
   									style={{ color: 'black', textDecoration: 'none' }}
   									activeStyle={{ color: '#c36cab', fontWeight: 400}}>
   									About
   						</NavLink>
   					</li>
   					
   					<li tabIndex='5' className='links-ul__link'>
   						<NavLink 	to='/contact'
   									style={{ color: 'black', textDecoration: 'none' }}
   									activeStyle={{ color: '#c36cab', fontWeight: 400}}>
   									Contact us
   						</NavLink>
   					</li>
   				</ul>
   			</div>

   			<div className='app-main-nav__login-cart-section'>
   				<p tabIndex='6' className='login-cart-section__login-label'>LOGIN / SIGN-UP</p>
   				<p tabIndex='7' className='login-cart-section__cart-label'><i className='fa fa-briefcase'></i></p>
   				<div id='login-cart-section__cart-count-label'>0</div>
   			</div>
        
      	</div>
}

export default Navbar;
