import React, { Component } from 'react';
import Search from '../search/Search';
import CardLabel from '../components/CardLabel'; 
import * as searchActions from '../actions/searchActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchContainer extends Component {

  render() {
    let cardLabel = "Enter your starting and ending locations below:"
    
    return (
      <Card>
        <CardLabel cardLabel={cardLabel} />
        <Search /> 
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = (dispatch) => {
  return {...bindActionCreators(searchActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    router: ownProps,
    actions: dispatchProps,
  };
})(SearchContainer);