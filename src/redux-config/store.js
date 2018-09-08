import { createStore, combineReducers } from 'redux';
import cartReducer from '../components/cart/reducer.js';

const rootReducer = combineReducers({
	// cart: cartReducer
	cart: null
}) 

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;