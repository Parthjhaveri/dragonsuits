import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux-config/store.js';

import '../../styles/App.css';
import FeaturedProduct from '../home-page/featured-product.jsx';
import cart_items_with_quantity from './index.js';

// INHERIT PRODUCT DATA FROM THE REDUX STORE FOR INDIVIDUAL PRODUCT THAT IS CLICKED ON
class Product_description extends React.Component {  

	render() {

		{
			// STATE AFTER BUTTON PRESS
			var STORE_STATE = store.getState();
			// console.log(STORE_STATE.cart);

			var prod_img = STORE_STATE.cart[0].image;		
			var prod_name = STORE_STATE.cart[0].name;		
			var prod_desc = STORE_STATE.cart[0].description;		
			
		}

		return <div className='section-product-wrapper-main'>	

			<div className='section-product-wrapper-main__product-wrapper'>
				
				<div className='product-wrapper__prod-image'>					
					{<img src={`/featured-imgs/${prod_img}`} alt={STORE_STATE.cart[0].description} className="prod-image__img" />}					
				</div>

				<div className='product-wrapper__prod-specs'>

					<p className='prod-specs__name'>{prod_name}</p>
					<p className='prod-specs__desc'>{prod_desc}</p>

				</div>

			</div>

		</div>

	}
}

export default Product_description;