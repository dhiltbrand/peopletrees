import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import {changeLang, toggleMenu} from '../../actions';
import LocalizedText from '../../assets/LocalizedText';


const Menu = ({auth, lang, toggleMenu, onLanguageSelector_Change, onMenuToggle_Click}) => (
	<nav className={(toggleMenu ? 'expanded' : '')}>
		<div className='menu-toggle' onClick={onMenuToggle_Click}>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<ul>
			{ (auth === null) ? (
					<li><NavLink to='/login'>{LocalizedText.LOGIN}</NavLink></li>
				) : (
					<li><NavLink to='/logout'>{LocalizedText.LOGOUT}</NavLink></li>
				)
			}
			<li><NavLink to='/import'>{LocalizedText.IMPORT}</NavLink></li>
			<li><NavLink to='/export'>{LocalizedText.EXPORT}</NavLink></li>
		</ul>
		<select onChange={onLanguageSelector_Change} value={lang}>
			<option value={LocalizedText.LANG_FRENCH_CODE}>{LocalizedText.LANG_FRENCH}</option>
			<option value={LocalizedText.LANG_ENGLISH_CODE}>{LocalizedText.LANG_ENGLISH}</option>
			<option value={LocalizedText.LANG_SPANISH_CODE}>{LocalizedText.LANG_SPANISH}</option>
		</select>
	</nav>
);

Menu.propTypes = {
	auth: PropTypes.string,
	lang: PropTypes.string.isRequired,
	onLanguageSelector_Change: PropTypes.func.isRequired,
	onMenuToggle_Click: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		lang: state.lang,
		toggleMenu: state.toggleMenu
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {

	return {
		onLanguageSelector_Change: (evt) => {
			let langCode = evt.target.value;
			LocalizedText.setLanguage(langCode);
			dispatch(changeLang(langCode));
		},
		onMenuToggle_Click: (e) => {
			dispatch(toggleMenu());
		}
	}
};

const ResponsiveMenu = connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);

export default ResponsiveMenu;