import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import LocalizedText from '../../assets/LocalizedText';
import ResponsiveMenu from '../ResponsiveMenu/ResponsiveMenu';

let languageOptions = [
	{ value: LocalizedText.LANG_FRENCH_CODE, label: LocalizedText.LANG_FRENCH },
	{ value: LocalizedText.LANG_ENGLISH_CODE, label: LocalizedText.LANG_ENGLISH },
	{ value: LocalizedText.LANG_SPANISH_CODE, label: LocalizedText.LANG_SPANISH }
];

class TopBar extends Component {
	render(props) {
		return(
			<div className='top-bar'>
				<NavLink to='' exact className='logo' alttext='logo'><img src={logo} alt='logo' /></NavLink>
				<ResponsiveMenu />
			</div>
		)
	}
};

export default TopBar;