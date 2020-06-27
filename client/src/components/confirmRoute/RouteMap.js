import React, { Component } from 'react';
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import { Icon } from 'semantic-ui-react';

class RouteMap extends Component {
    state = {
      Map: null
    }

    componentDidUpdate(prevProps) {
      if(!prevProps.mapboxKey && this.props.mapboxKey) {
        this.setState({
        Map: ReactMapboxGl({
        accessToken: this.props.mapboxKey
        })
      })
    }
  }
}

export default RouteMap;