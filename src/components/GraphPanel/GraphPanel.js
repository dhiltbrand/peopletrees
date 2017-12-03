import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Graph from './Graph';
import GraphTools from './GraphTools';
import Utils from '../../Utils';

class GraphPanel extends React.Component {
	constructor(props) {
		super(props);
		
		this.datauid = 'kjdflkdsjflkdsjfds';
		this.viewportWidth = Utils.getViewportWidth();
		this.viewportHeight = Utils.getViewportHeight();
	}

	render() {


		return (
			<div className='graph-panel panel' data-uid={this.datauid}>
				<Graph data={this.props.chart} height={this.viewportHeight} parentuid={this.datauid} width={this.viewportWidth} />
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