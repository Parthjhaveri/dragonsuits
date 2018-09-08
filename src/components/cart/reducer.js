const cartReducer = (state=[], action) => {
	switch(action.type) {
		
		case 'ADD':
			return [...state, action.payload]

		case 'REMOVE':
			const firstMatchIndex = state.indexOf(action.payload);			
			return state.filter( (item, index) => index !== firstMatchIndex); // TAKES OUT FIRST PRODUCT, RETURNS THE REST
		
		default:
			return state;

	}
}

export default cartReducer; 