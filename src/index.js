import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux-config/store.js';

const app = <Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
</Provider>

ReactDOM.render(app, document.getElementById('root'));

// SERVICE WORKER
registerServiceWorker();
