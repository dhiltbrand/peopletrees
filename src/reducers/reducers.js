import { combineReducers } from 'redux';

import {getUserLanguage} from '../Utils';

import {
	ADD_CHART,
	ADD_PERSON,
	CHANGE_LANG,
	CHART_FOCUS,
	EXPORT_FILE_FORMAT_SELECTED,
	FILE_IMPORTED,
	FLUSH_IMPORTED_DATA,
	RECEIVED_TOKEN,
	TOGGLE_MENU
} from '../actions'

export const lang_codes = {
	en: Symbol('en'),
	es: Symbol('es'),
	fr: Symbol('fr'),
	it: Symbol('it'),
	ja: Symbol('ja'),
	ru: Symbol('ru'),
	zh: Symbol('zh')
};

const mockChart = {
	active: true,
	name: 'The Domain Company llc.',
	created: '1998-05-31 12:00:00+6',
	nodes: {
		given_name: 'Ted',
		family_name: 'Jones',
		job_title: 'CEO',
		branches: [{
			given_name: 'Leslie',
			family_name: 'Anansi',
			job_title: 'VP',
			branches: []
		},{
			given_name: 'Thad',
			family_name: 'Cochran',
			job_title: 'Director of R&D',
			branches: []
		}]
	}
};

export function auth(state = null, action) {
	//Only take action if the code exists in our list of available languages
	//Don't take action if we're attempting to switch to the current language
	//if(lang_codes[action.code] && state.lang !== action.code) {

	switch (action.type) {
    	case RECEIVED_TOKEN:
      		return action.token
    	default:
	      	return state;
	}
}

export function lang(state = getUserLanguage(), action) {
	//Only take action if the code exists in our list of available languages
	//Don't take action if we're attempting to switch to the current language

	switch (action.type) {
		case CHANGE_LANG:
			return action.code
		default:
			return state;
	}
}

export function chart(state = mockChart, action) {
	switch (action.type) {
		case CHART_FOCUS:
			return action.chart
		default:
			return state;
	}
}

export function charts(state = [], action) {
	/**
	TODO: Only take action if the code exists in our list of available languages
	Don't take action if we're attempting to switch to the current language
	if(lang_codes[action.code] && state.lang !== action.code) {
		**/
	switch (action.type) {
		case ADD_CHART:
			return [
			...state.charts,
			action.chart
			]
		default:
			return state;
	}
}

export function exportfile(state = {}, action) {
	switch (action.type) {
		case EXPORT_FILE_FORMAT_SELECTED:
			return {
				...state.exportFile,
				fileFormat: action.fileFormat
			}
	}
}

export function importedData(state = [], action) {
	switch (action.type) {
		case FILE_IMPORTED:
			return action.data;
		case FLUSH_IMPORTED_DATA:
			return [];
		default:
			return state;
	}
}

export function toggleMenu(state = false, action) {

	switch(action.type) {
		case TOGGLE_MENU:
			return (action.toggle) ? action.toggle : !state;
		default:
			return state;
	}
}

const reducers = combineReducers({
	auth,
	charts,
	lang,
	importedData,
	toggleMenu
});

export default reducers;
