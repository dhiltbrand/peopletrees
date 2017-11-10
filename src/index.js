

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import { Route } from 'react-router';

import registerServiceWorker from './registerServiceWorker';

import Promise from 'promise-polyfill'; 

import './index.css';
import App from './App';
import AppHistory from './AppHistory';
import {auth, lang, charts} from './reducers'
import 'react-select/dist/react-select.css';


//Promise polyfill for older browsers
if (!window.Promise) {
  window.Promise = Promise;
}

const middleware = routerMiddleware(AppHistory);

const store = createStore(
	combineReducers({
		auth,
		charts,
    	lang,
    	router: routerReducer
  	}),
	applyMiddleware(middleware)
);


/*const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);*/

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={AppHistory}>
			<Route path='' render={()=><App />} />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
