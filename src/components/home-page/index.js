import React from 'react';
import { connect } from 'react-redux';


import '../../styles/App.css';
import FeaturedProduct from './featured-product.js';

////////////////////////////////////////////////////////////
// FEATURED PRODUCTS SECTION ON HOME PAGE
////////////////////////////////////////////////////////////

function FeaturedProds (props) {
return	<div className='app-main-homepage__featured-prods'>
			
			{
				props.products.map( (product, key) => 
					<FeaturedProduct 
						product={product} 
						key={key} 
						addToCart={props.addToCart} 
					/>)
			}
	
		</div>
}

function mapStateToProps (state) {
	return {
		cart: state.cart
	}
}

function mapDispatchToProps (dispatch) {
	return {

		addToCart: (item) => {
			dispatch({ type: 'ADD', payload: item });
		},

		removeFromCart: (item) => {
			dispatch({ type: 'REMOVE', payload: item });
		}
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProds);



