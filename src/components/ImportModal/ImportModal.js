import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Papa from 'papaparse';

import { fileImported, flushImportedData } from '../../actions';
import AppHistory from '../../AppHistory';
import LocalizedText from '../../assets/LocalizedText';
import Utils from '../../AppHistory';

import ImportFilePanel from './ImportFilePanel';

let closeTimeout = 0;

const desiredWidth = 580;

const customStyles = {
  content : {
  	right: '0',
  	left: '0',
  	marginLeft: 'auto',
  	marginRight: 'auto',
  	width: '580px'
  }
};

const ImportModal = ({ lang, onForm_Submit, onModal_Close }) => (
	<Modal
		isOpen={true}
		onRequestClose={onModal_Close}
		closeTimeoutMS={closeTimeout}
		contentLabel={LocalizedText.IMPORT}
		style={customStyles}
	>
		<a href='#' className='icon-close' onClick={onModal_Close} />
		<h1>{LocalizedText.IMPORT_FILE}</h1>
		<ImportFilePanel />
		<div className='buttons'>
			<input type='button' className='cancel' onClick={onModal_Close} value={LocalizedText.CANCEL} />
			<input type='button' className='action' onClick={onForm_Submit} value={LocalizedText.IMPORT_FILE} />
		</div>
	</Modal>
);


ImportModal.propTypes = {
	lang: PropTypes.string.isRequired,
	onForm_Submit: PropTypes.func.isRequired,
	onModal_Close: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
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