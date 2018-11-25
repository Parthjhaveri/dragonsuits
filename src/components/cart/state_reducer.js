
// GENERAL STATE HOLDER 
const state_holding_reducer = (state = [], action) => {

	switch (action.type) {

		case 'ADD-TO-STATE':
			return [...state, action.payload]

		default:
			return state;
	}

}