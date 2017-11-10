import React from 'react';
import { NavLink } from 'react-router-dom';

import LocalizedText from '../assets/localizedText';

const AddPersonButton = (props) => (
	<NavLink to='/addperson' className='button add-a-person'>{LocalizedText.ADD_A_PERSON}</NavLink>
);

export default AddPersonButton;