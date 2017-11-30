import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Graph from './Graph';
import GraphTools from './GraphTools';
import LocalizedText from '../../assets/LocalizedText';
import Utils from '../../Utils';


class GraphPanel extends React.Component {
	constructor(props) {
		super(props);
		
	}

//<Graph data={this.props.chart} />
	render() {
		return (
			<div className='graph-panel panel'>
				
				<GraphTools onClick={this.props.onaddPerson_Click} />
			</div>
		);
	}

	onComponentDidMount() {
		
	}
};
const mapStateToProps = (state) => {
  return {
	chart: state.chart,
	lang: state.lang
  }
}

const mapDispatchToProps = dispatch => {
  return {
	onAddPerson_Click: (evt) => {
	  //dispatch(toggleTodo(id))
	}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphPanel);