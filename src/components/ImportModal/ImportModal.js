import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Papa from 'papaparse';

import { fileImported, flushImportedData } from '../../actions';
import AppHistory from '../../AppHistory';
import LocalizedText from '../../assets/LocalizedText';
import Utils from '../../Utils';

import ImportFilePanel from './ImportFilePanel';

let closeTimeout = 0;

let viewportWidth = Utils.getViewportWidth();

let desiredWidth = (viewportWidth < 580) ? viewportWidth : 580;

const ImportModal = ({ importedData, lang, onForm_Submit, onModal_Close }) => (
	<Modal
		isOpen={true}
		onRequestClose={onModal_Close}
		closeTimeoutMS={closeTimeout}
		contentLabel={LocalizedText.IMPORT}
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
		<h1>{LocalizedText.IMPORT_FILE} <a href='#' className='icon-close' onClick={onModal_Close} /></h1>
		<div className='modal-body'>
			<ImportFilePanel />
		</div>
		{importedData.length <= 1 ? null : (
			<div className='buttons'>
				<input type='button' className='cancel' onClick={onModal_Close} value={LocalizedText.CANCEL} />
				<input type='button' className='action' onClick={onForm_Submit} value={LocalizedText.IMPORT_FILE} />
			</div>
			)}
	</Modal>
);

ImportModal.propTypes = {
	lang: PropTypes.string.isRequired,
	onForm_Submit: PropTypes.func.isRequired,
	onModal_Close: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
  	importedData: state.importedData,
  	lang: state.lang
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	onForm_Submit: () => {
  		alert('submit form');
  	},
    onModal_Close: (evt) => {
    	dispatch(flushImportedData());
    	AppHistory.goBack();
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImportModal);