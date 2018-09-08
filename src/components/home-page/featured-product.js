import React from 'react';
import '../../styles/App.css';

// CHILD COMPONENT OF HOME-PAGE FEATURED 

const FeaturedProduct = props => {
return	<div className='app-main-homepage__featured-product' id={props.product.id}>
			
			<div className='indiv-prod__wrapper'>
				<img 	className='featured-prods__indiv-prod' 
						src={`./featured-imgs/${props.product.image}`}
						alt={props.product.name}
				/>

				<div className='indiv-prod__name-wrapper'>
					<p className='indiv-prod__name'>{props.product.name}</p>								
					<p className='indiv-prod__price'>${props.product.price}</p>
				</div>
				
				<button 
					className='indiv-prod__add-to-cart-btn'
					onClick={() => props.addToCart(props.product)}
				>
					<i className="fas fa-suitcase" id='add-to-cart'></i>
				</button>
			</div>
										
		</div>
}

export default FeaturedProduct;



