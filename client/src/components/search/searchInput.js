import React from 'react';
import { Input } from 'semantic-ui-react';

class SearchInput extends Component{

  constructor(props) {
    super(props)
    this.state = {
      isDropdownOpen: false,
      suggestedLocations: []
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.suggestedLocations !== this.props.suggestedLocations){
      this.addSuggestedLocationsToState(this.props.suggestedLocations)
    }
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <Dropdown onSearchChange={this.props.onChange} onChange={this.handleDropdownChange} placeholder={this.props.label} fluid search selection options={this.state.suggestedLocations} open={this.state.isDropdownOpen} />
        <input type="submit"/>
        </form>
      )
  }
}

export default SearchInput;