import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import AppHistory from '../../AppHistory';
import {exportFileFormatSelected, FORMAT_SELECTED} from '../../actions'

import LocalizedText from '../../assets/LocalizedText';
import Utils from '../../Utils';

let closeTimeout = 0;

let viewportWidth = Utils.getViewportWidth();

let desiredWidth = (viewportWidth < 580) ? viewportWidth : 580;

const customStyles = {
	content : {
		width: desiredWidth + 'px'
	}
};

const ExportModalView = ({onFileFormat_Selected, onForm_Submit, onModal_Close}) => (
	<Modal
		isOpen={true}
		onAfterOpen={this.afterOpen}
		onRequestClose={onModal_Close}
		closeTimeoutMS={closeTimeout}
		contentLabel={LocalizedText.EXPORT}
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
		<h1>{LocalizedText.EXPORT_THE_CHART}</h1>
		<a href='#' className='icon-close' onClick={onModal_Close} />
		<div className='modal-body'>
			<label htmlFor='fileTypeSelector'>{LocalizedText.FILE_TYPE}</label>
			<select id='fileTypeSelector' name='fileTypeSelector' onChange={onFileFormat_Selected}>
				<option value={LocalizedText.PDF}>{LocalizedText.DOT_PDF}</option>
				<option value={LocalizedText.PNG}>{LocalizedText.DOT_PNG}</option>
				<option value={LocalizedText.SVG}>{LocalizedText.DOT_SVG}</option>
			</select>
		</div>
		<div className='buttons'>
			<input type='button' className='cancel' onClick={onModal_Close} value={LocalizedText.CANCEL} />
			<input type='button' className='action' onClick={onForm_Submit} value={LocalizedText.EXPORT} />
		</div>
	</Modal>
);

ExportModalView.propTypes = {
	onFileFormat_Selected: PropTypes.func.isRequired,
	onForm_Submit: PropTypes.func.isRequired,
	onModal_Close: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	onFileFormat_Selected: (evt) => {
  		let fileFormat = evt.target.value;
  		dispatch(exportFileFormatSelected(fileFormat));
  	},
  	onForm_Submit: (evt) => {
  		alert('Submit');
  	},
    onModal_Close: (evt) => {
    	AppHistory.goBack();
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExportModalView);