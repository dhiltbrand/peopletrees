import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import LocalizedText from '../../assets/LocalizedText';
import AnimChartOrganize from '../../assets/anim-chart-organize.svg';
import AnimChartEmbed from '../../assets/anim-chart-embed.svg';
import AnimChartExport from '../../assets/anim-chart-export.svg';

const WelcomePanel = (props) => (
	<div className='welcome-panel panel'>
		<div className='column-container'>
			<div className='column-three'>
				<img src={AnimChartOrganize} className='column-icon organize'/>
				<h3 className='center'>{LocalizedText.WELCOME_COLUMN_1_HEADER}</h3>
				<p>{LocalizedText.WELCOME_COLUMN_1_BLURB_1}</p>
				<p>{LocalizedText.WELCOME_COLUMN_1_BLURB_2}</p>
				<p>{LocalizedText.WELCOME_COLUMN_1_BLURB_3}</p>
			</div>
			<div className='column-three'>
				<img src={AnimChartExport} className='column-icon export'/>
				<h3 className='center'>{LocalizedText.WELCOME_COLUMN_2_HEADER}</h3>
				<p>{LocalizedText.WELCOME_COLUMN_2_BLURB_1}</p>
				<p>{LocalizedText.WELCOME_COLUMN_2_BLURB_2}</p>
				<p>{LocalizedText.WELCOME_COLUMN_2_BLURB_3}</p>
			</div>
			<div className='column-three'>
				<img src={AnimChartEmbed} className='column-icon icon-2'/>
				<h3 className='center'>{LocalizedText.WELCOME_COLUMN_3_HEADER}</h3>
				<p>{LocalizedText.WELCOME_COLUMN_3_BLURB_1}</p>
				<p>{LocalizedText.WELCOME_COLUMN_3_BLURB_2}</p>
				<p>{LocalizedText.WELCOME_COLUMN_3_BLURB_3}</p>
			</div>
			<div className='try'>
				<h2>{LocalizedText.WELCOME_TRY_HEADER}</h2>
				<p>{LocalizedText.WELCOME_TRY} <NavLink to='/graph'>{LocalizedText.WELCOME_TRY_LINK_TEXT}</NavLink></p>
				<p>{LocalizedText.WELCOME_TRY_BLURB}</p>
			</div>
		</div>
	</div>
);

WelcomePanel.PropTypes = {
	lang: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		lang: state.lang
	}
};

export default connect(
	mapStateToProps
)(WelcomePanel);