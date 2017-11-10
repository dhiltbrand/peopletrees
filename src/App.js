import 'babel-polyfill';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';

import './App.css';

import AddAPersonModal from './components/AddAPersonModal';
import GraphPanel from './components/GraphPanel';
import ExportModal from './components/ExportModal';
import ImportModal from './components/ImportModal';
import LocalizedText from './assets/localizedText';
import LoginModal from './components/LoginModal';
import MenuBar from './components/MenuBar';

//var appStore = 

class App extends Component {
  constructor(props) {
    super(props);

    console.dir(props);

    LocalizedText.setLanguage(this.props.lang);
  }

  render() {
    return (
      <div className='peopletrees-app'>
        <MenuBar />
        <Route path="/addperson" render={()=><AddAPersonModal />} />
        <Route path="/export" render={()=><ExportModal />} />
        <Route path="/import" render={()=><ImportModal />} />
        <GraphPanel />
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    lang: state.lang
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
