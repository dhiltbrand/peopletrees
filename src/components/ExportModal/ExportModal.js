import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import AppHistory from '../../AppHistory';

import LocalizedText from '../../assets/LocalizedText';

let closeTimeout = 0;

const ExportModalView = ({onForm_Submit, onModal_Close}) => (
	<Modal
		isOpen={true}
		onAfterOpen={this.afterOpen}
		onRequestClose={onModal_Close}
		closeTimeoutMS={closeTimeout}
		contentLabel={LocalizedText.EXPORT}
	>
		<a href='#' className='icon-close' onClick={onModal_Close} />
		<h1>{LocalizedText.EXPORT_THE_CHART}</h1>
		<p>{LocalizedText.MODAL_EXPORT_BLURB}</p>
		<form>
			<label htmlFor='fileTypeSelector'>{LocalizedText.FILE_TYPE}</label>
			<select id='fileTypeSelector' name='fileTypeSelector'>
				<option value={LocalizedText.PDF}>{LocalizedText.DOT_PDF}</option>
				<option value={LocalizedText.PNG}>{LocalizedText.DOT_PNG}</option>
				<option value={LocalizedText.SVG}>{LocalizedText.DOT_SVG}</option>
			</select>
			<div className='buttons'>
				<input type='button' className='cancel' onClick={onModal_Close} value={LocalizedText.CANCEL} />
				<input type='button' className='action' onClick={onForm_Submit} value={LocalizedText.EXPORT} />
			</div>
		</form>
	</Modal>
);

ExportModalView.propTypes = {
	onForm_Submit: PropTypes.func.isRequired,
	onModal_Close: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    
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
)(ExportModalView);