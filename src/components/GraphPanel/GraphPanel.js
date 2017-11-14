import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AddPersonButton from '../AddPersonButton';
import LocalizedText from '../../assets/LocalizedText';
import Utils from '../../Utils';


class GraphPanel extends React.Component {
  constructor(props) {
	super(props);

  }

  drawGraph() {
	let chart = this.props.chart;

	var canvas = document.getElementById('graph');
	var context = canvas.getContext("2d");
	context.font = "30px Arial";
	
	this.drawGraphTitle(context, chart.name);

	this.drawNode(context, chart.nodes, Utils.getViewportWidth() / 2, 100);
  }

  drawGraphTitle(context, name) {
  	context.font = "30px Arial";
  	context.fillText(name, 10, 50);
  }

  drawNode(context, node, xPosition, yPosition) {
	  context.beginPath();
	  context.arc(xPosition, yPosition, 40, 0, 2 * Math.PI, false);
	  context.lineWidth = 3;
	  context.strokeStyle = '#666666';
	  context.stroke();
	  context.font = "16px Arial";
	  let personName = node.given_name + ' ' + node.family_name;
	  let jobTitle = node.job_title;
	  context.fillText(personName, xPosition - (context.measureText(personName).width / 2), yPosition + 75);
	  context.fillText(jobTitle, xPosition - (context.measureText(jobTitle).width / 2), yPosition + 100);
  }

  componentDidMount() {
	this.drawGraph();
  }

  render() {
	return (
	  <div className='graph-panel'>
	  <AddPersonButton />
	  <canvas id='graph' height={Utils.getViewportHeight() - 65} width={Utils.getViewportWidth()}></canvas>
	  </div>
	);
  }
};

const filterGraphPersons = (persons, filter) => {

};

const mapStateToProps = (state) => {
  return {
	chart: state.chart,
	lang: state.lang
  }
}

const mapDispatchToProps = dispatch => {
  return {
	onAddPerson_Click: id => {
	  //dispatch(toggleTodo(id))
	}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphPanel);