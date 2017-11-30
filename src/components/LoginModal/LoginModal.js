import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppHistory from '../../AppHistory';
import LocalizedText from '../../assets/LocalizedText';
import Utils from '../../Utils';

let closeTimeout = 0;

let viewportWidth = Utils.getViewportWidth();

let desiredWidth = (viewportWidth < 580) ? viewportWidth : 580;

const customStyles = {
  content : {
  	left: '0',
  	leftMargin: 'auto',
  	rightMargin: 'auto',
  	right: '0',
  	width: desiredWidth + 'px'
  }
};

const LoginModal = ({onForm_Submit, onModal_Close}) => (
	<Modal
			isOpen={true}
			onAfterOpen={this.afterOpen}
			onRequestClose={onModal_Close}
			closeTimeoutMS={closeTimeout}
			contentLabel={LocalizedText.LOGIN}
			style={customStyles}
		className={{
			base: 'modal-content login-modal',
			afterOpen: 'modal-content_after-open',
			beforeClose: 'modal-content_before-close'
		}}
		overlayClassName={{
			base: 'modal-overlay',
			afterOpen: 'modal-overlay_after-open',
			beforeClose: 'modal-overlay_before-close'
		}}
	>
		<h1>{LocalizedText.LOGIN} <a href='#' className='icon-close' onClick={onModal_Close} /></h1>
		<div className='modal-body'>
			<form>
				<label htmlFor='username'>{LocalizedText.USERNAME}</label>
				<input name='username'></input>
				<label htmlFor='password'>{LocalizedText.PASSWORD}</label>
				<input name='password' type='password'></input>
			</form>
			<h3>-or-</h3>
			<NavLink to='/create' className='button green'>{LocalizedText.CREATE_A_FREE_ACCOUNT}</NavLink>
		</div>
		<div className='buttons'>
			<input type='button' className='cancel' onClick={onModal_Close} value={LocalizedText.CANCEL} />
			<input type='button' className='action' onClick={onForm_Submit} value={LocalizedText.LOGIN} />
		</div>
	</Modal>
);

LoginModal.propTypes = {
	onForm_Submit: PropTypes.func.isRequired,
	onModal_Close: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	debugger;
  return {
  	userSettings: state.userSettings
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	onForm_Submit: () => {
  		alert('submit form');
  	},
    onModal_Close: (evt) => {
    	AppHistory.goBack();
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);