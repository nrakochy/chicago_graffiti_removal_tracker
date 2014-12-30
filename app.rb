require 'sinatra/base'
require_relative './lib/chicago_api_data_presenter'
require_relative './lib/chicago_data_masher'

#CHICAGO_GRAFFITI_REMOVAL_API = 'https://data.cityofchicago.org/resource/hec5-y4x5.json'

class GraffitiRemovalTracker < Sinatra::Base
  def initialize
    super()
    # api_data = ChicagoApiDataPresenter.new(CHICAGO_GRAFFITI_REMOVAL_API).get_data
    # @open_graffiti_requests =
    # ChicagoDataMasher.find_open_requests_for_graffiti_removal(api_data)
    @open_graffiti_requests = [
      {
      "police_district" => "12",
      "zip_code" => "60608",
      "location" => {
        "needs_recoding" => false,
        "longitude" => "-87.67355391908644",
        "latitude" => "41.85282566369766"},
      "status" => "Open",
      "where_is_the_graffiti_located_" => "Side",
      "service_request_number" => "14-02155523",
      "x_coordinate" => "1164037.50683076",
      "creation_date" => "2014-12-17T00:0000",
      "what_type_of_surface_is_the_graffiti_on_" => "Wood - Painted",
      "ward" => "25",
      "y_coordinate" => "1889720.71130794",
      "longitude" => "-87.67355391908644",
      "community_area" => "31",
      "type_of_service_request" => "Graffiti Removal",
      "latitude" => "41.85282566369766",
      "street_address" => "2140 S WOLCOTT AVE"
    }
    ]
  end

  get '/' do
    erb :index, :locals => { :openRequests => @open_graffiti_requests}
  end

#  post '/' do
  #  location_request = params[:location]
  #  matching_records = ChicagoDataMasher.find_by_zip_code(location, @open_graffiti_requests)
  #  { message: matching_records }.to_jso
  #  end
end
