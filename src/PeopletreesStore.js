import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import AppHistory from './AppHistory';
import { auth, charts, chart, lang, importedData, toggleMenu } from './reducers/reducers'

const middleware = routerMiddleware(AppHistory);

const PeopletreesStore = createStore(
	combineReducers({
		auth,
		charts,
		chart,
		lang,
		importedData,
		toggleMenu,
		router: routerReducer
  	}),
	applyMiddleware(middleware)
);

export default PeopletreesStore;