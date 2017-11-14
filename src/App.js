import 'babel-polyfill';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';

import './App.css';

import AddAPersonModal from './components/AddAPersonModal/AddAPersonModal';
import GraphPanel from './components/GraphPanel/GraphPanel';
import ExportModal from './components/ExportModal/ExportModal';
import ImportModal from './components/ImportModal/ImportModal';
import LocalizedText from './assets/LocalizedText';
import LoginModal from './components/LoginModal/LoginModal';
import TopBar from './components/TopBar/TopBar';

class App extends Component {
  constructor(props) {
    super(props);

    //LocalizedText.setLanguage(props.lang);
  }

  render() {
    return (
      <div className='peopletrees-app'>
        <TopBar />
        <Route path="/addperson" render={()=><AddAPersonModal />} />
        <Route path="/export" render={()=><ExportModal />} />
        <Route path="/import" render={()=><ImportModal />} />
        <GraphPanel />
      </div>
    );
  }
};

export default App;
