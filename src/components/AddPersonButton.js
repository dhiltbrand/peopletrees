import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import LocalizedText from '../assets/LocalizedText';

const AddPersonButton = ({lang}) => (
	<NavLink to='/addperson' className='button add-a-person'>{LocalizedText.ADD_A_PERSON}</NavLink>
);

const mapStateToProps = (state) => {
	return {
		lang: state.lang
	}
};

export default connect(
	mapStateToProps
)(AddPersonButton);