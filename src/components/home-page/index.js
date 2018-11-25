import React from 'react';
import { connect } from 'react-redux';


import '../../styles/App.css';
import FeaturedProduct from './featured-product.jsx';
import cart_items_with_quantity from '../cart/index.js';
import Product_description from '../cart/product-page.jsx';

////////////////////////////////////////////////////////////
// FEATURED PRODUCTS SECTION ON HOME PAGE
////////////////////////////////////////////////////////////

function FeaturedProds (props) {

/* 
	PROPS INSIDE THIS FUNCTION IS:
		- addToCart
		- removeFromCart
		- products
		- cart
	
	addToCart & removeFromCart ARE INITIALIZED INSIDE OUR mapDispatchToProps FUNCTION BELOW,
	WHICH ARE CONNECTED WITH OUR FeaturedProds FUNCTION THROUGH THE connect() FUNCTION CALL BELOW.
	PRODUCTS GETS PASSED FROM THE PRODUCTS JSON FILE. cart COMES FROM THE mapStateToProps FUNCTION RESPECTIVELY.
*/

// console.log(props);
return	<div className='app-main-homepage__featured-prods'>			
			{
				props.products.map( (product, key) => 
					<FeaturedProduct 
						product={product} 
						key={key} 
						addToCart={props.addToCart} 
						removeFromCart={props.removeFromCart} 
						cart={cart_items_with_quantity(props.cart)}
						dataToProductPage={props.dataToProductPage}
					/>)
			}	
		</div>
}

// CONNECTS ALL OUR PROPS BETWEEN COMPONENTS TO THE STATE
function mapStateToProps (state) {
	return {
		cart: state.cart,
		stateHolder: state.stateHolder
	}
}

// COONNECTS ALL OUR ACTIONS TO PROPS
function mapDispatchToProps (dispatch) {
	return {

		addToCart: (item) => {
			dispatch({ type: 'ADD', payload: item });
		},

		removeFromCart: (item) => {
			dispatch({ type: 'REMOVE', payload: item });
		},

		// ADD PRODUCTS TO OUR INDIVIDUAL PRODUCT PAGE
		dataToProductPage: (item) => {
			dispatch({ type: 'DATA-TO-PRODUCTS-PAGE', payload: item })
		}
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProds, Product_description);



