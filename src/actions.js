export const ADD_CHART = Symbol('ADD_CHART');
export const ADD_PERSON = Symbol('ADD_PERSON');
export const CHANGE_LANG = Symbol('CHANGE_LANG');
export const CHART_FOCUS = Symbol('CHART_FOCUS');
export const FILE_IMPORTED = Symbol('FILE_IMPORTED');
export const FLUSH_IMPORTED_DATA = Symbol('FLUSH_IMPORTED_DATA');
export const EXPORT_FILE_FORMAT_SELECTED = Symbol('EXPORT_FILE_FORMAT_SELECTED');
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

export function exportFileFormatSelected(fileFormat) {
	return {
		type: EXPORT_FILE_FORMAT_SELECTED,
		fileFormat
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
	return {
		type: TOGGLE_MENU,
		toggle
	}
}

export default {
	addPerson,
	changeLang,
	exportFileFormatSelected,
	fileImported,
	toggleMenu
};