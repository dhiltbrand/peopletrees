import { combineReducers } from 'redux';

import { lang_codes } from '../data'

import {
	ADD_PERSON,
	CHANGE_LANG,
	SHOW_EXPORT_MODAL,
	SHOW_IMPORT_MODAL,
	SHOW_LOGIN_MODAL
} from '../actions'

import { dataReducers } from '../data';

function addPerson(state, person) {
	return state;
}

function changeLang(state, action) {

	//Only take action if the code exists in our list of available languages
	//Don't take action if we're attempting to switch to the current language
	if(lang_codes[action.code] && state.lang !== action.code) {
		return state;
	}

	return state;
}

const reducers = combineReducers({
	...dataReducers,
	addPerson,
	changeLang
});

export default reducers;
