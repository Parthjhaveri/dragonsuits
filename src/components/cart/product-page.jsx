import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux-config/store.js';

import '../../styles/App.css';
import FeaturedProduct from '../home-page/featured-product.jsx';
import cart_items_with_quantity from './index.js';

// INHERIT PRODUCT DATA FROM THE REDUX STORE FOR INDIVIDUAL PRODUCT THAT IS CLICKED ON
class Product_description extends React.Component { 

	constructor(props) {
		super(props);
		// console.log(this);

		// BIND METHODS
		this.add_item = this.add_item.bind(this);
		this.inc_item = this.inc_item.bind(this);
		this.dec_item = this.dec_item.bind(this);

	    // INITIAL STATE
		this.state = {
			cart: {},
			current_product: {}
		}
	
	}

	// BEFOER COMPONENT MOUNTS, SET STATE FROM REDUX STORE
	componentWillMount() {

		// COMPONENT STATE FROM REDUX STORE
		var prod_cart = store.getState();

		this.setState({
			current_product: prod_cart.cart[0]
		})

		console.log(store.getState());

	}

	// TAKE CURRENT PRODUCT AND PUSH IT TO STORE AS THE CURRENT OBJECT, 
	// WHERE IT WILL BE PUSHED INTO A CART ITEMS ARRAY
	add_item() {
		store.dispatch({ type: 'ADD', payload: this.state.current_product });
		console.log('Updated state after adding item ', store.getState().cart, `${store.getState().cart.length} items`);
	}

	inc_item() {
		store.dispatch({ type: 'ADD', payload: this.state.current_product });
		console.log('Updated state after adding item ', store.getState().cart, `${store.getState().cart.length} items`);
	}

	dec_item() {
		store.dispatch({ type: 'REMOVE', payload: this.state.current_product });
		console.log('Updated state after removing item ', store.getState().cart, `${store.getState().cart.length} items`);
	}

	render() {

		return <div className='section-product-wrapper-main'>	

			<div className='section-product-wrapper-main__product-wrapper'>
				
				<div className='product-wrapper__prod-image'>					
					{<img src={`/featured-imgs/${this.state.current_product.image}`} alt={this.state.current_product.description} className="prod-image__img" />}					
				</div>

				<div className='product-wrapper__prod-specs'>

					<p className='prod-specs__name'>{this.state.current_product.name}</p>
					<p className='prod-specs__desc'>{this.state.current_product.description}</p>
					<p className='prod-specs__price'>${this.state.current_product.price}<span className="price-span"> /USD</span></p>

					<p className='prod-specs__avail-sizes'>Available sizes:</p>
					
					<p className='prod-specs__sizes'>
						{	
							this.state.current_product.size.map((item, idx) => {
								return item + " "; 
							})
						}
					</p>
										
					<button className='prod-specs__increment-count-btn'
							id='prod-increment-count'
							name='increment-one-btn'								
							value='+'							
							onClick={this.inc_item}
					>
					+
					</button>

					<button className='prod-specs__add-to-cart'
							id='prod-add-to-cart'
							name='add-to-cart-button'								
							value='Add To Cart'
							onClick={this.add_item}
					>
					Add To Cart
					</button>

					<button className='prod-specs__decrement-count-btn'
							id='prod-decrement-count'
							name='decrement-one-btn'								
							value='-'	
							onClick={this.dec_item}						
					>
					-
					</button>
			
					<hr className='prod-specs__hr' />
					<h3 className='prod-specs__free-ship-label'>Free returns on all products up to 14 days</h3>
					<hr className='prod-specs__hr' />

				</div>

			</div>

		</div>

	}
}

export default Product_description;