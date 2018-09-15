import React from 'react';
import { connect } from 'react-redux';

import '../../styles/App.css';

const cart_items_with_quantity = (cart_items) => {	
	return cart_items.reduce((acc, item) => {

		const filtered_item = acc.filter(item2 => item2.id === item.id)[0];

			filtered_item !== undefined ? filtered_item.quantity++ : acc.push({ ...item, quantity: 1 })
			return acc;	
	}, [])
}

// CART COMPONENT
const Cart = () => {
return  <div className='app-main-cart'>
			
			<h1>Caaaart!!</h1>

		</div>
}

export default cart_items_with_quantity;
// export default Cart;
