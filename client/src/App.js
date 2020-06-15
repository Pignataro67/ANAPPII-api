import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Card from './components/Card';
import Header from './components/Header';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';	import ConfirmRouteContainer from './containers/ConfirmRouteContainer';
import ResultsContainer from './containers/ResultsContainer';
import SearchContainer from './containers/SearchContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
          <div>
          <Route exact path="/" component={SearchContainer}/>
          <Route exact path="/confirm_route" component={ConfirmRouteContainer}/>
          <Route exact path="/results" component={ResultsContainer}/>
          </div>
        </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {startingLocation: state.StartingLocation, destination: state.destination}
} 

export default connect(mapStateToProps)(App);