import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Select from 'react-select';

import LocalizedText from '../assets/localizedText';
import { changeLang } from '../actions';
import logo from '../assets/logo.svg';

let languageOptions = [
	{ value: LocalizedText.LANG_FRENCH_CODE, label: LocalizedText.LANG_FRENCH },
	{ value: LocalizedText.LANG_ENGLISH_CODE, label: LocalizedText.LANG_ENGLISH },
	{ value: LocalizedText.LANG_SPANISH_CODE, label: LocalizedText.LANG_SPANISH }
];

const MenuBar = ({onLanguageSelector_Change, onMenuToggle_Click}) => (
	<div className='menu-bar'>
		<NavLink to='' className='logo' alttext='logo'><img src={logo} alt='logo' /></NavLink>
		<nav>
			<div className='menu-toggle' onClick={onMenuToggle_Click}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul>
				<li><NavLink to='/import'>{LocalizedText.IMPORT}</NavLink></li>
				<li><NavLink to='/export'>{LocalizedText.EXPORT}</NavLink></li>
			</ul>
			<select onChange={onLanguageSelector_Change} value='en'>
				<option value={LocalizedText.LANG_FRENCH_CODE}>{LocalizedText.LANG_FRENCH}</option>
				<option value={LocalizedText.LANG_ENGLISH_CODE}>{LocalizedText.LANG_ENGLISH}</option>
				<option value={LocalizedText.LANG_SPANISH_CODE}>{LocalizedText.LANG_SPANISH}</option>
			</select>
		</nav>
		
	</div>
);

MenuBar.propTypes = {
	onLanguageSelector_Change: PropTypes.func.isRequired,
  	onMenuToggle_Click: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => {
  return {
    ...state,
    lang: state.lang
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	onMenuToggle_Click: (e) => {
  		
  	},
    onLanguageSelector_Change: (evt) => {
      dispatch(changeLang(evt.target.value));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar);