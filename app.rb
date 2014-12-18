require 'sinatra/base'
require_relative 'chicago_api_data_presenter'

class GraffitiRemovalTracker < Sinatra::Base
  def initialize
    @graffiti_data = ChicagoApiDataPresenter.get_data
  end

  get '/' do
  end
end
