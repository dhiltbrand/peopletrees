import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LocalizedText from '../assets/localizedText';
import { changeLang } from '../actions';
import logo from '../assets/logo.png';

const RightSidebar = ({onLanguageSelector_Change}) => (
  <div className="right-sidebar">
        <img src={logo} className="logo" alt="logo" />
        <nav>
          <ul>
            <li><a href='/login'>{LocalizedText.LOGIN}</a></li>
            <li><a href='/import'>{LocalizedText.IMPORT}</a></li>
            <li><a href='/export'>{LocalizedText.EXPORT}</a></li>
          </ul>
        </nav>
        <select onChange={onLanguageSelector_Change} size="1">
          <option value={LocalizedText.LANG_FRENCH_CODE}>{LocalizedText.LANG_FRENCH}</option>
          <option value={LocalizedText.LANG_ENGLISH_CODE}>{LocalizedText.LANG_ENGLISH}</option>
          <option value={LocalizedText.LANG_SPANISH_CODE}>{LocalizedText.LANG_SPANISH}</option>
        </select>
      </div>
);

RightSidebar.propTypes = {
  onLanguageSelector_Change: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    ...state,
    lang: state.lang
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLanguageSelector_Change: (e) => {
      dispatch(changeLang(e.currentTarget.value));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightSidebar);