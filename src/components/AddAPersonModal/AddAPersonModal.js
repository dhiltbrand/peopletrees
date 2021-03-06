import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import AppHistory from '../../AppHistory';

import LocalizedText from '../../assets/LocalizedText';
import Utils from '../../Utils';

let closeTimeout = 0;

const AddAPersonModal = ({onForm_Submit, onModal_Close}) => (
	<Modal
		isOpen={true}
		onAfterOpen={this.afterOpen}
		onRequestClose={onModal_Close}
		closeTimeoutMS={closeTimeout}
		contentLabel={LocalizedText.ADD_A_PERSON}
		className={{
			base: 'modal-content',
			afterOpen: 'modal-content-after-open',
			beforeClose: 'modal-content-before-close'
		}}
		overlayClassName={{
			base: 'modal-overlay',
			afterOpen: 'modal-overlay-after-open',
			beforeClose: 'modal-overlay-before-close'
		}}
	>
		<h1>{LocalizedText.ADD_A_PERSON}</h1>
		<a href='#' className='icon-close' onClick={onModal_Close} />
		<div className='modal-body'>
			<label htmlFor='givenName'>{LocalizedText.GIVEN_NAME}</label>
			<input id= 'givenName' name='givenName' type='text' autoFocus></input>
			<label htmlFor='familyName'>{LocalizedText.FAMILY_NAME}</label>
			<input id= 'familyName' name='familyName' type='text'></input>
			<label htmlFor='positionTitle'>{LocalizedText.POSITION_TITLE}</label>
			<input id= 'positionTitle' name='positionTitle' type='text'></input>
		</div>
		<div className='buttons'>
			<input type='button' className='cancel' onClick={onModal_Close} value={LocalizedText.CANCEL} />
			<input type='button' className='action' onClick={onForm_Submit} value={LocalizedText.ADD} />
		</div>
	</Modal>
);

AddAPersonModal.propTypes = {
	onForm_Submit: PropTypes.func.isRequired,
	onModal_Close: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    ...state,
    lang: state.lang
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	onForm_Submit: () => {
  		alert('Submit');
  	},
    onModal_Close: (e) => {
    	AppHistory.goBack();
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAPersonModal);