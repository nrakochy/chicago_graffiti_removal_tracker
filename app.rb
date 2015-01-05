require 'sinatra/base'
require 'json'
require_relative './lib/chicago_api_data_presenter'
require_relative './lib/chicago_data_masher'

CHICAGO_GRAFFITI_REMOVAL_API = 'https://data.cityofchicago.org/resource/hec5-y4x5.json'

class GraffitiRemovalTracker < Sinatra::Base
  def initialize
    super()
        # api_data = ChicagoApiDataPresenter.get_data(CHICAGO_GRAFFITI_REMOVAL_API)
        # @open_graffiti_requests =
        # ChicagoDataMasher.find_open_requests_with_days_since_request(api_data).to_json
    @open_graffiti_requests =
      [
        {
      :police_district => "12",
      :zip_code => "60608",
      :location => {
      :needs_recoding => false,
      :longitude => "-87.67355391908644",
      :latitude => "41.85282566369766"},
      :status => "Open",
      :where_is_the_graffiti_located_ => "Side",
      :service_request_number => "14-02155523",
      :x_coordinate => "1164037.50683076",
      :creation_date => "2014-12-17T00:00:00",
      :what_type_of_surface_is_the_graffiti_on_ => "Wood - Painted",
      :ward => "25",
      :y_coordinate => "1889720.71130794",
      :longitude => "-87.67355391908644",
      :community_area => "31",
      :type_of_service_request => "Graffiti Removal",
      :latitude => "41.85282566369766",
      :street_address => "2140 S WOLCOTT AVE",
      :days_elapsed_since_request => "1"
    },
      {
      :police_district => "19",
      :zip_code => "60657",
      :location => {
      :needs_recoding => false,
      :longitude => "-87.64986575978035",
      :latitude => "41.943719613028875"
    },
      :status => "Open",
      :where_is_the_graffiti_located_ => "Alley",
      :ssa => "18",
      :service_request_number => "14-02208941",
      :x_coordinate => "1170252.72000681",
      :creation_date => "2014-12-29T00:00:00",
      :what_type_of_surface_is_the_graffiti_on_ => "Brick - Unpainted",
      :ward => "44",
      :y_coordinate => "1922784.0483662",
      :longitude => "-87.64986575978035",
      :community_area => "6",
      :type_of_service_request => "Graffiti Removal",
      :latitude => "41.943719613028875",
      :street_address => "810 W ROSCOE ST",
      :days_elapsed_since_request => "3"
    }, 
      {
      :police_district => "24",
      :zip_code => "60626",
      :location => {
      :needs_recoding => false,
      :longitude => "-87.66473889858634",
      :latitude => "42.008039712225724"
    },
      :status => "Open",
      :where_is_the_graffiti_located_ => "Side",
      :ssa => "24",
      :service_request_number => "14-02208973",
      :x_coordinate => "1165976.38006805",
      :creation_date => "2014-12-29T00:00:00",
      :what_type_of_surface_is_the_graffiti_on_ => "Brick - Unpainted",
      :ward => "49",
      :y_coordinate => "1946189.67710559",
      :longitude => "-87.66473889858634",
      :community_area => "1",
      :type_of_service_request => "Graffiti Removal",
      :latitude => "42.008039712225724",
      :street_address => "1324 W MORSE AVE",
      :days_elapsed_since_request => "7"
    }
    ].to_json
  end

  get '/' do
    erb :index, :locals => { :openRequests => @open_graffiti_requests }
  end

end
