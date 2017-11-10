export const ADD_CHART = Symbol('ADD_CHART');
export const ADD_PERSON = Symbol('ADD_PERSON');
export const CHANGE_LANG = Symbol('CHANGE_LANG');
export const RECEIVED_TOKEN = Symbol('RECEIVED_TOKEN');
export const SHOW_EXPORT_MODAL = Symbol('SHOW_EXPORT_MODAL');
export const SHOW_IMPORT_MODAL = Symbol('SHOW_IMPORT_MODAL');
export const SHOW_LOGIN_MODAL = Symbol('SHOW_LOGIN_MODAL');
export const SHOW_SIGNUP_MODAL = Symbol('SHOW_SIGNUP_MODAL');

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
