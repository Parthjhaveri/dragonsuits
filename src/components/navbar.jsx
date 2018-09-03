import React from 'react';
import '../styles/App.css';
import logo from '../images/logo.jpg';

const Navbar = props => {
return 	<div className='app-main-nav'>
        	
   			<img src={logo} className='app-main-nav__nav-logo' alt='Logo' tabIndex='1' />

   			<div className='app-main-nav__nav-mid-wrapper'>
   				<ul className='nav-mid-wrapper__links-ul'>
   					<li tabIndex='2' className='links-ul__link'>Shop</li>
   					<li tabIndex='3' className='links-ul__link'>Accessories</li>
   					<li tabIndex='4' className='links-ul__link'>About</li>
   					<li tabIndex='5' className='links-ul__link'>Contact us</li>
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
