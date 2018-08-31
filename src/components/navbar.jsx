import React, { Component } from 'react';
import '../styles/App.css';
import logo from '../images/logo.jpg';

class Navbar extends Component {

	constructor(props) {	
		super(props);

		this.state = {
			app_logo: logo,
			cart_total: 0
		};
	}

	render() {
	    return (
	      	<div className='app-main-nav'>
	        	
	   			<img src={this.state.app_logo} className='app-main-nav__nav-logo' alt='Logo' tabIndex='1' />

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
	   				<p tabIndex='7' className='login-cart-section__cart-label'><i class='fa fa-briefcase'></i></p>
	   				<div id='login-cart-section__cart-count-label'>{this.state.cart_total}</div>
	   			</div>
	        
	      	</div>
	    );
	}
}

export default Navbar;
