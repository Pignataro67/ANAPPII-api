import React, { Component } from "react";
import SearchInput from "./SearchInput";
import Button from '../Button';
import Card from '../Card';

class Search extends Component {

  state = {
    startingLocation: '',
    destination: ''
}

handleFormSubmit = (e) => {
  e.preventDefault()
  console.log(this.state)
}

handleChangeStart = ({value: startingLocation}) => {
  this.setState({
    startingLocation
  })
}

handleChangeDestination = ({value: destination}) => {
  this.setState({
    destination
  })
}

handleStartSearch = () => {
  console.log(this.state.startingLocation)
}

handleDestinationSearch = () => {
  console.log(this.state.destination)
}

  render() {
    return (
      <Card>
        <SearchInput label="Starting Location..." onChange={this.handleChangeStart} onClick={this.handleStartSearch}/>
        <label="Starting Location..." onChange={this.handleChangeStart}/>
        <br/>
        <br/>
        <SearchInput label="Destination..." onChange={this.handleChangeDestination} onClick={this.handleDestinationSearch}/>/> 
        <br/>
        <br/> 
        <Button buttonTitle="Submit" onClick={this.handleFormSubmit}/>/>
      </Card>
    );
  }
}

export default Search;