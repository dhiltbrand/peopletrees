import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Papa from 'papaparse';

import AppHistory from '../AppHistory';
import LocalizedText from '../assets/localizedText';
import CSVTemplate from '../assets/Peopletrees_Template.csv';

let closeTimeout = 0;

const ImportModal = ({onFile_Selected, onForm_Submit, onModal_Close}) => (
	<Modal
		isOpen={true}
		onRequestClose={onModal_Close}
		closeTimeoutMS={closeTimeout}
		contentLabel={LocalizedText.IMPORT}
	>
		<a href='#' className='icon-close' onClick={onModal_Close} />
		<h1>{LocalizedText.IMPORT_FILE}</h1>
		<p>{LocalizedText.MODAL_IMPORT_BLURB}</p>
		<label
			onDrop={onFile_Selected}
			className='file-selector-target'
			htmlFor='fileSelector'>
				{LocalizedText.CLICK_TO_SELECT}<br />
				{LocalizedText.HYPHEN_OR_HYPHEN}<br />
				{LocalizedText.DRAG_AND_DROP_A_FILE_TO_IMPORT}
		</label>
		<a className='button csv-template' href={CSVTemplate} target='_blank'>{LocalizedText.CSV_TEMPLATE}</a>
		<input
			id='fileSelector'
			name='fileSelector'
			type='file'
			className='file-selector'
			onChange={onFile_Selected} />
		<div className='buttons'>
			<input type='button' className='cancel' onClick={onModal_Close} value={LocalizedText.CANCEL} />
			<input type='button' className='action' onClick={onForm_Submit} value={LocalizedText.IMPORT_FILE} />
		</div>
	</Modal>
);

ImportModal.propTypes = {
	onFile_Selected: PropTypes.func.isRequired,
	onForm_Submit: PropTypes.func.isRequired,
	onModal_Close: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	onFile_Selected: (evt) => {
  		Papa.parse(evt.target.files[0], {
			complete: (results) => {
				console.log(results);
			}
		});
  	},
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
)(ImportModal);