import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MspTable from './MSP';
import Listings from './listings'
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <Grid container spacing={16} direction="column" justify="center" style={{ padding: 24 }, { paddingLeft: 500, paddingRight: 500 }}>
          <Grid item >
            <Listings />
          </Grid>
          <Grid item>
            <MspTable />
          </Grid>
        </Grid>
      </div >
    );
  }
}

export default App;
