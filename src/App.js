import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MspTable from './MSP';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <Grid container spacing={16} justify="center" style={{ padding: 24 }}>
          <Grid item spacing={16}>
            <MspTable />
          </Grid>
        </Grid>
      </div >
    );
  }
}

export default App;
