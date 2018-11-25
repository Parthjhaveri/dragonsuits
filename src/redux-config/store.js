import { createStore, combineReducers } from 'redux';
import cartReducer from '../components/cart/reducer.js';
import state_holding_reducer from '../components/cart/state_reducer.js';

const rootReducer = combineReducers({
	stateHolder: state_holding_reducer,
	cart: cartReducer	
}) 

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;