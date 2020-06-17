import React, { Component } from "react";
import SearchInput from "./SearchInput";
import Button from '../Button';
import Card from '../Card';

class Search extends Component {

  state = {
    startingLocation: '',
    destination: ''
}

handleOnSubmit = (e) => {
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

  render() {
    return (
      <form>
        <SearchInput />
        <SearchInput /> 
      </form>
    );
  }
}

export default Search;