import { combineReducers } from 'redux';

import {getUserLanguage} from './Utils'

import {
	ADD_CHART,
	ADD_PERSON,
	CHANGE_LANG,
	RECEIVED_TOKEN,
	SHOW_EXPORT_MODAL,
	SHOW_IMPORT_MODAL,
	SHOW_LOGIN_MODAL
} from './actions'

import {lang_codes, } from './data'


export const InitialStateTemplate = {
	auth: null,
	lang: 'en',
	charts: []
};

export function auth(state = null, action) {
	//Only take action if the code exists in our list of available languages
	//Don't take action if we're attempting to switch to the current language
	//if(lang_codes[action.code] && state.lang !== action.code) {
		
	switch (action.type) {
    	case RECEIVED_TOKEN:
      		return action.token
    	default:
	      	return state
	}
}

export function lang(state = getUserLanguage(), action) {
	//Only take action if the code exists in our list of available languages
	//Don't take action if we're attempting to switch to the current language
	//if(lang_codes[action.code] && state.lang !== action.code) {
		
	switch (action.type) {
    	case CHANGE_LANG:
      		return action.code
    	default:
	      	return state
	}
}

export function charts(state = [], action) {
	//Only take action if the code exists in our list of available languages
	//Don't take action if we're attempting to switch to the current language
	//if(lang_codes[action.code] && state.lang !== action.code) {
		
	switch (action.type) {
    	case ADD_CHART:
      		return [
        		...state.charts,
        		action.chart
        		]
    	default:
	      	return state
	}
}

const reducers = combineReducers({
	auth,
	charts,
	lang
});

export default reducers;
