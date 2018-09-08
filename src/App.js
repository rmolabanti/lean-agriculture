import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomizedTable from './Table';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Lean Agriculture</h1>
        </header>        
        <Grid container spacing={16} justify="center" style={{padding: 24}}>
        <Grid item  spacing={16}>
          <CustomizedTable/>
        </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
