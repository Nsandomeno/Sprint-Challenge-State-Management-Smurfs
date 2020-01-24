import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import SmurfDisplay from './smurfDisplay.js';
import SmurfForm from './smurfForm.js';

import { startApp } from '../actions/index.js';
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    console.log("Running cdM... startingApp...")
    this.props.startApp();
  }

  render() {
    // console.log("This is state after cdM:", this.state.smurfs)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfDisplay />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurfs: state.smurfs
  }


}

export default connect(mapStateToProps, { startApp })(App);
