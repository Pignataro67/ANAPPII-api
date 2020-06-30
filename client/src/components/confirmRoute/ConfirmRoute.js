import React, { Component } from 'react';
import Button from '../Button';
import RouteMap from './RouteMap';
import Card from '../Card';
import { Redirect } from "react-router-dom";

class ConfirmRoute extends Component {

  state = {
    redirectToResults: false,
    redirectToSearch: false
}

handleRedirect = async (e) => {
  e.preventDefault()
  await this.props.actions.fetchUberEstimate(this.props.startLat, this.props.startLng, this.props.destinationLat, this.props.destinationLng)
  this.setState({
    redirectToResults: true
  })
}
  
  render() {
    return (
    <div>
       <Card>
         <RouteMap mapboxKey={this.props.mapboxKey} startLngLat={this.props.startLngLat} destinationLngLat={this.props.destinationLngLat}/>
          <Button /> 
          <Button />
        </Card>
      </div>
    )
  }
}

export default ConfirmRoute;