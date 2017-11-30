import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Papa from 'papaparse';

import LocalizedText from '../../assets/LocalizedText';
import { fileImported } from '../../actions';


import CSVTemplate from '../../assets/Peopletrees_Template.csv';

const ImportedDataHeader = (props) => (
	<tr>
		{props.data.map((cell, index) => {
			return <div key={index}>{cell}</div>
		})}
	</tr>
);

const ImportedDataRow = (props) => (
	<div className='row'>
		{props.data.map((cell, index) => {
			return <div key={index}>{cell}</div>
		})}
	</div>
);

const ImportFilePanel = ({ importedData, onFile_Selected}) => (
	<div className='import-file-panel'>

		<div className='interactive'>
			<label
				onDrop={onFile_Selected}
				className='file-selector-target'
				htmlFor='fileSelector'>
					{LocalizedText.CLICK_TO_SELECT}<br />
					{LocalizedText.HYPHEN_OR_HYPHEN}<br />
					{LocalizedText.DRAG_AND_DROP_A_FILE_TO_IMPORT}
			</label>
			<a className='button csv-template' href={CSVTemplate} download='Peopletrees_Template.csv' target='_blank'>{LocalizedText.CSV_TEMPLATE}</a>
			<input
				id='fileSelector'
				name='fileSelector'
				type='file'
				className='file-selector'
				onChange={onFile_Selected} />
		</div>
		{ importedData.length <= 1 ? null : (
			<div className='imported-data-container'>
				Records Imported: {importedData.length - 1}
				<div className='imported-data-table'>
				<ImportedDataRow data={importedData[0]} className='header' />
				{importedData.slice(1).map((datarow, rowkey) => {
						return <ImportedDataRow key={rowkey} data={datarow} />
					})}
				</div>
			</div>
		)}
	</div>
);

const mapStateToProps = (state, props) => {

  return {
  	importedData: state.importedData
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	onFile_Selected(evt) {
  		Papa.parse(evt.target.files[0], {
			complete: function(results) {
				dispatch(fileImported(results.data));
			}
		});
  	}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImportFilePanel);

