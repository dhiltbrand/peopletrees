import { combineReducers } from 'redux';

export const lang_codes = {
	en: Symbol('en'),
	es: Symbol('es'),
	fr: Symbol('fr'),
	it: Symbol('it'),
	ja: Symbol('ja'),
	ru: Symbol('ru'),
	zh: Symbol('zh')
};

export const InitialStateTemplate = {
	auth: null,
	lang: 'en',
	charts: [],
	chart: {},
	importedData: []
};


export function initialState(state = InitialStateTemplate) {
	//Do cookie/localStorage checking

	return state;
};

function requestChart(state, action) {

	return state;
};

function requestChartList(state, action) {

	return state;
};

function requestUser(state, action) {

	return state;
};

function sendLoginCredentials(state, action) {

	return state;
};

const dataReducers = combineReducers({
	initialState,
	requestChart,
	requestChartList,
	requestUser,
	sendLoginCredentials
});

export default dataReducers;