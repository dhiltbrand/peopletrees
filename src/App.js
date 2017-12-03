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
import FeedbackModal from './components/FeedbackModal/FeedbackModal';
import TopBar from './components/TopBar/TopBar';
import WelcomePanel from './components/WelcomePanel/WelcomePanel';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='peopletrees-app'>
        <TopBar />
        <Route path='/login' render={()=><LoginModal />} />
        <Route path='/addperson' render={()=><AddAPersonModal />} />
        <Route path='/export' render={()=><ExportModal />} />
        <Route path='/import' render={()=><ImportModal />} />
        <Route path='/feedback' render={()=><FeedbackModal />} />
        <Route path='/' exact render={()=><WelcomePanel />} />
        <Route path='/graph' render={()=><GraphPanel />} />
      </div>
    );
  }
};

export default App;
