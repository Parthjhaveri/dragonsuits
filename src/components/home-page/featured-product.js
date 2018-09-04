import React from 'react';
import '../../styles/App.css';

// CHILD COMPONENT OF HOME-PAGE FEATURED 

const FeaturedProduct = props => {
return	<div className='app-main-homepage__featured-product' id={props.product.id}>
						
				<img 	className='featured-prods__indiv-prod' 
						src={`./featured-imgs/${props.product.image}`}
						alt={props.product.name}
				/>
				<p>{props.product.name}</p>								
				<p>${props.product.price}</p>
										
		</div>
}

export default FeaturedProduct;


