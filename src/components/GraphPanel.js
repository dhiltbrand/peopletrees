import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//import canvas2pdf from 'canvas2pdf';

import LocalizedText from '../assets/localizedText';

import AddPersonButton from './AddPersonButton';

class GraphPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div className="graph-panel">
      <AddPersonButton />
      <canvas id='graph'></canvas>
      </div>
    );
  }
};

const filterGraphPersons = (persons, filter) => {

};

const mapStateToProps = state => {
  return {
    persons: filterGraphPersons(state.persons, null)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPerson_Click: id => {
      alert('ya dun clicked');
      //dispatch(toggleTodo(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphPanel);