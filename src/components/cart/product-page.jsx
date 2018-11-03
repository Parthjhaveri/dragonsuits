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
			var prod_price = STORE_STATE.cart[0].price;		
			var prod_size = STORE_STATE.cart[0].size;		
			
		}

		return <div className='section-product-wrapper-main'>	

			<div className='section-product-wrapper-main__product-wrapper'>
				
				<div className='product-wrapper__prod-image'>					
					{<img src={`/featured-imgs/${prod_img}`} alt={STORE_STATE.cart[0].description} className="prod-image__img" />}					
				</div>

				<div className='product-wrapper__prod-specs'>

					<p className='prod-specs__name'>{prod_name}</p>
					<p className='prod-specs__desc'>{prod_desc}</p>
					<p className='prod-specs__price'>${prod_price}<span className="price-span"> /USD</span></p>

					<p className='prod-specs__avail-sizes'>Available sizes:</p>
					
					<p className='prod-specs__sizes'>
					{
						prod_size.map((item, idx) => {
							console.log(item)							
							return item + " " 
						})
					}
					</p>

					<label for='add-to-cart-button'>
						<button className='prod-specs__add-to-cart'
								id='prod-add-to-cart'
								name='add-to-cart-button'
								tabindex=''
								value='Add To Cart'
						>
						Add To Cart
						</button>
					</label>

					<hr className='prod-specs__hr' />
					<h3 className='prod-specs__free-ship-label'>Free returns on all products up to 14 days</h3>
					<hr className='prod-specs__hr' />

				</div>

			</div>

		</div>

	}
}

export default Product_description;