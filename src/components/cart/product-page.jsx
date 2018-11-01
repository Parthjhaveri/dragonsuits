import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux-config/store.js';

import '../../styles/App.css';
import FeaturedProduct from '../home-page/featured-product.jsx';
import cart_items_with_quantity from './index.js';


// INHERIT PRODUCT DATA FROM THE REDUX STORE FOR INDIVIDUAL PRODUCT THAT IS CLICKED ON
class Product_description extends React.Component{  


	render() {

	return <div className='section-product-wrapper-main'>

	{
		console.log(store.getState())
		// const query = this.props.location.state;
		// console.log(query);
	}
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<h1>Product page</h1>

	</div>

	}
}

export default Product_description;