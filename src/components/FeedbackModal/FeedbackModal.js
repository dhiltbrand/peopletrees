import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
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

const FeedbackModal = ({onForm_Submit, onModal_Close }) => (
	<Modal
		isOpen={true}
		onRequestClose={onModal_Close}
		closeTimeoutMS={closeTimeout}
		contentLabel={LocalizedText.IMPORT}
		style={customStyles}
		className={{
			base: 'modal-content',
			afterOpen: 'modal-content_after-open',
			beforeClose: 'modal-content_before-close'
		}}
		overlayClassName={{
			base: 'modal-overlay',
			afterOpen: 'modal-overlay_after-open',
			beforeClose: 'modal-overlay_before-close'
		}}
	>
		<h1>{LocalizedText.FEEDBACK} <a href='#' className='icon-close' onClick={onModal_Close} /></h1>
		<div className='modal-body'>
			<label>{LocalizedText.EMAIL_ADDRESS}</label>
			<input type='text' />
			<label>{LocalizedText.YOUR_MESSAGE}</label>
			<textarea></textarea>
		</div>
		<input type='text' />
			<div className='buttons'>
				<input type='button' className='cancel' onClick={onModal_Close} value={LocalizedText.CANCEL} />
				<input type='button' className='action' onClick={onForm_Submit} value={LocalizedText.SEND} />
			</div>
	</Modal>
);

FeedbackModal.propTypes = {
	//user_email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
	return {
		user_email: state.userSettings
	}
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
)(FeedbackModal);