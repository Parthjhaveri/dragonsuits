/* 
	HERE, THE REDUCER DEFINES HOW THE ACTION TYPES WILL BEHAVE AND CHANGE THE STATE
	IN RESPONSE TO ACTIONS SENT TO THE STORE.
*/
const cartReducer = (state=[], action) => {

	switch(action.type) {
		case 'ADD':		
			return [...state, action.payload];

		case 'REMOVE':
			const firstMatchIndex = state.indexOf(action.payload);	
			return state.filter( (item, index) => index !== firstMatchIndex); // TAKES OUT FIRST PRODUCT, RETURNS THE REST

		case 'DATA-TO-PRODUCTS-PAGE':
			return [...state, action.payload];
		
		default:			
			return state;

	}
}

export default cartReducer; 