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
  end

  get '/' do
    erb :index
  end

  post '/' do
    erb :index
  end
end
