function _fetchLocation(input) {
  debugger
  return fetch(`RailsApi/search_locations/${input}`)
  .then(response => response.json())
  .then(locations => locations.predictions)
}

function _getLatLong(location) {
  return fetch(`RailsApi/confirm_route/convert_lat_long/${location}`)
  .then(response => response.json())
  .then(addressInfo => addressInfo.results[0].geometry.location) 
}

export function fetchStartingLocation(input) {
  console.log(input)
  return (dispatch) => {
    dispatch({ type: 'FETCHING_SUGGESTED_START_LOCATIONS' });

    _fetchLocation(input).then(suggestedStartingLocations => dispatch({ type: 'DISPLAY_START_LOCATIONS', suggestedStartingLocations }));
  };
}

export function fetchDestination(input) {
  console.log(input)
    return (dispatch) => {
    dispatch({ type: 'FETCHING_SUGGESTED_DESTINATION' });
    _fetchLocation(input).then(suggestedDestinations => dispatch({ type: 'DISPLAY_DESTINATIONS', suggestedDestinations }));
  };
} 

export function convertStartLatLong(location) {
  console.log(location)
  return (dispatch) => {
    dispatch({type: 'CONVERTING_START_LAT_LONG'})
    _getLatLong(location).then(startLatLong => dispatch({type: 'RETRIEVE_START_LAT_LONG', startLatLong}))
  }
}

export function convertDestinationLatLong(location) {
  console.log(location)
  return (dispatch) => {
    dispatch({type: 'CONVERTING_DESTINATION_LAT_LONG'})
    _getLatLong(location).then(destinationLatLong => dispatch({type: 'RETRIEVE_DESTINATION_LAT_LONG', destinationLatLong}))
  }
}