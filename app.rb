require 'sinatra/base'

class GraffitiRemovalTracker < Sinatra::Base
  get '/' do
    chicago_data = ChicagoDataApiRequest.new
  end
end
