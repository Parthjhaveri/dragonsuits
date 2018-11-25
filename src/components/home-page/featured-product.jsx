import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import '../../styles/App.css';
import product_description from '../cart/product-page.jsx';

// console.log("The Props here are coming from the 'FeaturedProds' component:");

// CHILD COMPONENT OF HOME-PAGE FEATURED 
const FeaturedProduct = props => {

	/* 
		HERE IN INSIDE FEATURED PRODUCT, PROPS IS BASICALLY ALL THE PRODUCTS FROM 
		THE PRODUCTS JSON FILE WHICH ARE BEING PASSED AS PROPS INTO THE FEATURED PRODUCTS
		COMPONENT WHICH GETS DISPLAYED IN THE HOME PAGE. WHEN YOU CONSOLE.LOG PROPS, 
		YOU WILL SEE A LIST OF EVERY PRODUCT FROM THE PRODUCTS FILE.

		THIS IS BECAUSE, FROM THE INDEX.JS (HOME PAGE), WE ARE PASSING AS PROPS
		- addToCart 
		- cart
		- product 
		- key

		WHICH WE INHERIT AS PROPS INTO THIS COMPONENT.
	*/
	// console.log(props);
	const this_item_in_cart = props.cart.filter(item => item.id === props.product.id)[0];  
	

	// SEND DATA TO REDUX STORE SO THAT IT CAN BE INHERITED INTO THE PRODUCT PAGE...
	var log_prod = (event) => {
		// console.log("Event dot target ", event.target);
		// console.log("Props dot product ", props.product);

		// ADDS ITEM TO THE CART ON CLICK
		props.dataToProductPage(props.product);			
	}

return	<div className='app-main-homepage__featured-product' id={props.product.id}>
			
			<Link to={
				{ pathname: '/product' + `/${(props.product.name).replace(/ /g,'-')}` + '/product_id=' + `${(props.product.id)}`}
			}>

				<div className='indiv-prod__wrapper' onClick={log_prod}>
					<img 	className='featured-prods__indiv-prod' 
							src={`./featured-imgs/${props.product.image}`}  
							alt={props.product.name}
							data-prod-id={props.product.id}
							data-prod-ct={(this_item_in_cart && this_item_in_cart.quantity) || 0}
					/>

					<div className='indiv-prod__name-wrapper'>
						<p className='indiv-prod__name'>{props.product.name}</p>								
						<p className='indiv-prod__price'>${props.product.price}</p>
					</div>
												
				</div>
			</Link>
										
		</div>  
}

export default FeaturedProduct;


{
// <button 
// 	className='indiv-prod__add-to-cart-btn'
// 	onClick={() => props.addToCart(props.product)} 
// >
// 	<i className="fas fa-suitcase" id='add-to-cart'></i> 
// 	({(this_item_in_cart && this_item_in_cart.quantity) || 0})
// </button>
}	
