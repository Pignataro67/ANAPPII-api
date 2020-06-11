import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
        <img src={logo} className="App-logo" alt="logo" />	      <Card startingLocation={this.props.startingLocation} destination={this.props.destination}/>
    </div>
  );
}

export default App;