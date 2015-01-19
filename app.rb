require 'sinatra/base'
require 'sinatra/assetpack'
require 'json'
require_relative './lib/chicago_api_data_presenter'
require_relative './lib/chicago_data_masher'

class GraffitiRemovalTracker < Sinatra::Base
  set :root, File.dirname(__FILE__)
  register Sinatra::AssetPack

  attr_reader :open_graffiti_requests
  CHICAGO_GRAFFITI_REMOVAL_API = 'https://data.cityofchicago.org/resource/hec5-y4x5.json'


  assets {
    js :app, '/js/app.js', [
      '/js/vendor/jquery-2.1.3.js',
      '/js/filterSearch.js',
      '/js/mapMarkers.js',
      '/js/maps.js',
      '/js/searchBox.js'
  ]

  css :application, '/css/application.css', [
    '/css/style.css'
  ]

  js_compression  :jsmin
  }

  get '/' do
    @open_graffiti_requests = call_external_api
    @empty_requests = []
    erb :index, :locals => { :openRequests => @empty_requests }

  end

  get '/location' do
    erb :index, :locals => { :openRequests => @open_graffiti_requests }
  end


  def call_external_api
    api_data = ChicagoApiDataPresenter.get_data(CHICAGO_GRAFFITI_REMOVAL_API)
    ChicagoDataMasher.find_open_requests_with_days_since_request(api_data).to_json
  end

end
# <script src="javascripts/vendor/jquery-2.1.3.js"></script>
#   <script type="text/javascript" src="javascripts/maps.js"></script>
#   <script type="text/javascript" src="javascripts/mapMarkers.js"></script>
#   <script type="text/javascript" src="javascripts/searchBox.js"></script>
#   <script type="text/javascript" src="javascripts/filterSearch.js"></script>

#<link rel="stylesheet" href="style/app.css">
