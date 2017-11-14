import React from 'react';

export function getUserLanguage() {
	let lang = null;

	if(navigator.languages && navigator.languages.length) {
		lang = navigator.languages[0].split('-')[0];;
	} else if(navigator.language) {
		lang = navigator.language.split('-')[0];
	} else if(navigator.browserLanguage) {
		lang = navigator.browserLanguage.split('-')[0];
	}

	return (lang) ? lang : 'en';
}

export function getViewportHeight() {
	return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

export function getViewportWidth() {
	return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

export default {
	getUserLanguage,
	getViewportHeight,
	getViewportWidth
};