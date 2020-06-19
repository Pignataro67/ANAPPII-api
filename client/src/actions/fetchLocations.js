function _fetchLocation(input) {
  debugger
  return fetch(`/search_start/${input}`)
  .then(response => response.json())
  .then(locations => locations.predictions)
}

export function fetchStartingLocation(input) {
  console.log(input);
}