Rails.application.routes.draw do
  scope(:path => '/RailsApi') do
  get '/search_locations/:input', to: 'places_search#search_locations'
  get '/confirm_route/convert_lat_long/:location', to: 'geocode_map#get_lat_long'
  get '/confirm_route/mapbox', to: 'confirm_route#mapbox'
  get '/uber_lyft', to: 'uber_lyft#uber_estimate'
  end
end