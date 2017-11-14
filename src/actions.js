export const ADD_CHART = Symbol('ADD_CHART');
export const ADD_PERSON = Symbol('ADD_PERSON');
export const CHANGE_LANG = Symbol('CHANGE_LANG');
export const CHART_FOCUS = Symbol('CHART_FOCUS');
export const FILE_IMPORTED = Symbol('FILE_IMPORTED');
export const FLUSH_IMPORTED_DATA = Symbol('FLUSH_IMPORTED_DATA');
export const RECEIVED_TOKEN = Symbol('RECEIVED_TOKEN');
export const TOGGLE_MENU = Symbol('TOGGLE_MENU');

export function addPerson(person) {
	return {
		type: ADD_PERSON,
		person
	}
}

export function changeLang(code) {
	return {
		type: CHANGE_LANG,
		code
	}
}

export function chartFocus(chart) {
	return {
		type: CHART_FOCUS,
		chart
	}
}

export function flushImportedData() {
	return {
		type: FLUSH_IMPORTED_DATA
	}
}

export function fileImported(csvJson) {
	return {
		type: FILE_IMPORTED,
		data: csvJson
	}
}

export function toggleMenu(toggle) {
	debugger;
	return {
		type: TOGGLE_MENU,
		toggle
	}
}

export default {
	addPerson,
	changeLang,
	fileImported,
	toggleMenu
};