import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { Route } from 'react-router';

import registerServiceWorker from './registerServiceWorker';

import Promise from 'promise-polyfill'; 

import './index.css';
import App from './App';
import AppHistory from './AppHistory';
import PeopletreesStore from './PeopletreesStore';

function getUserLanguage() {

};

function getUserSettings() {

};


//Promise polyfill for older browsers
if (!window.Promise) {
  window.Promise = Promise;
}

ReactDOM.render(
	<Provider store={PeopletreesStore}>
		<ConnectedRouter history={AppHistory}>
			<Route path='' render={()=><App />} />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
