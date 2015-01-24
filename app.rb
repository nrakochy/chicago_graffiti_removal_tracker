require 'sinatra/base'
require 'json'
require_relative './lib/chicago_api_data_presenter'
require_relative './lib/chicago_data_masher'

class GraffitiRemovalTracker < Sinatra::Base
  CHICAGO_GRAFFITI_REMOVAL_API = 'https://data.cityofchicago.org/resource/hec5-y4x5.json'

  get '/' do
    erb :index
  end

  get '/data' do
    call_external_api
  end

  def call_external_api
    api_data = ChicagoApiDataPresenter.get_data(CHICAGO_GRAFFITI_REMOVAL_API)
    ChicagoDataMasher.find_open_requests_with_days_since_request(api_data).to_json
  end
end

