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
			return <th key={index}>{cell}</th>
		})}
	</tr>
);

const ImportedDataRow = (props) => (
	<tr>
		{props.data.map((cell, index) => {
			return <td key={index}>{cell}</td>
		})}
	</tr>
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
			<a className='button csv-template' href={CSVTemplate} target='_blank'>{LocalizedText.CSV_TEMPLATE}</a>
			
			<input
				id='fileSelector'
				name='fileSelector'
				type='file'
				className='file-selector'
				onChange={onFile_Selected} />
		</div>
		<div className='blurb'>
			<p>{LocalizedText.MODAL_IMPORT_BLURB}</p>
		</div>
		{ importedData.length <= 1 ? null : (
			<div className='imported-data-container'>
				Records Imported: {importedData.length - 1}

				<table cellSpacing='0'>
					<thead>
						<ImportedDataHeader data={importedData[0]} />
					</thead>
					<tbody>
					{importedData.slice(1).map((datarow, rowkey) => {
						return <ImportedDataRow key={rowkey} data={datarow} />
					})}
					</tbody>
				</table>
			</div>
		)}
	</div>
);

const mapStateToProps = (state) => {

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

