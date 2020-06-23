export default function rootReducer(state = {
  startingLocation: '', destination: ''
}, action) {
  switch(action.type){
    case "FETCHING_SUGGESTED_START_LOCATIONS":
      return {}
    case "FETCHING_SUGGESTED_DESTINATIONS":
      return {...state, isFetchingDestination: true, suggestedDestinations: []}
    case "DISPLAY_DESTINATIONS":
      return {...state, isFetchingDestination: false, suggestedDestinations: action.suggestedDestinations}
    default:
        return state
  }
} 