require 'sinatra/base'
require_relative 'chicago_api_data_presenter'

#CHICAGO_GRAFFITI_REMOVAL_API = 'https://data.cityofchicago.org/resource/hec5-y4x5.json'

class GraffitiRemovalTracker < Sinatra::Base
  def initialize
    super()
   # @graffiti_data = ChicagoApiDataPresenter.new(CHICAGO_GRAFFITI_REMOVAL_API).get_data
  end

  get '/' do
    erb :index
  end

  post '/' do
    erb :index
  end
end
