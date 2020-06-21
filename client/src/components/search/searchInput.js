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
}

export default SearchInput;