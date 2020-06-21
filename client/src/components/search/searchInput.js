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
}

export default SearchInput;