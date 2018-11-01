import React from 'react';
import { connect } from 'react-redux';

import '../../styles/App.css';

const cart_items_with_quantity = (cart_items) => {	

	// HERE, cart_items REFERS TO ALL THE ITEMS IN THE CART UPON ADD-TO-CART BUTTON PRESS
	// CART ITEMS IS AN ARRAY OF OBJECTS THAT IS RETURNED WHEN WE ADD ITEMS TO OUR CART.
	// EACH OBJECT INSIDE THE ARRAY, IS AN OBJECT, DIRECTLY DERIVED FROM OUR PRODUCT LIST.
	
	// console.log(cart_items); // ALL ITEMS INSIDE CART AFTER ADD TO CART BUTTON PRESS...

	return cart_items.reduce((acc, item) => {
		// console.log('Items in cart: ', acc, 'Individual item: ', item);
		
		const filtered_item = acc.filter(item2 => item2.id === item.id)[0];		
			// console.log(filtered_item);
			filtered_item !== undefined ? filtered_item.quantity++ : acc.push({ ...item, quantity: 1 });
			// console.log(acc);
			return acc;	
	}, []);
}

// CART COMPONENT
const Cart = (props) => {

return  <div className='app-main-cart'>
			
			<h1>Caaaart!!</h1>


		</div>
}

export default cart_items_with_quantity;
// export default Cart;
